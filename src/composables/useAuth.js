import { ref, computed } from "vue"

const token = ref(localStorage.getItem('token'))

export function useAuth() {
	const setToken = async (response) => {
		const data = await response.json()
		localStorage.setItem('token', data.token)
		token.value = data.token
	}

	const login = async (event) => {
		const formData = new FormData(event.target)
		const formProps = Object.fromEntries(formData)

		const response = await fetch(new URL('login', 'http://localhost:3001/api/'), {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formProps)
		})

		if (response.ok) {
			await setToken(response)
		}
	}

	const register = async (event) => {
		const response = await fetch(new URL('register', 'http://localhost:3001/api/'), {
			method: 'POST',
			body: new FormData(event.target)
		})

		if (response.ok) {
			await setToken(response)
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
		token.value = null
	}

	const isAuthenticated = computed(() => {
		return token.value !== null
	})

	return {
		isAuthenticated,
		token,
		login,
		register,
		logout,
	}
}