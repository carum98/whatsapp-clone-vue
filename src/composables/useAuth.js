import { ref, computed } from "vue"

const token = ref(localStorage.getItem('token'))

export function useAuth() {
	const setToken = (data) => {
		localStorage.setItem('token', data.token)
		token.value = data.token
	}

	const login = async (event) => {
		const formData = new FormData(event.target)
		const formProps = Object.fromEntries(formData)

		const response = await fetch(new URL('login', 'https://chat-api.carum.dev/api/'), {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formProps)
		})

		if (response.ok) {
			setToken(await response.json())
		}
	}

	const register = async (event) => {
		const response = await fetch(new URL('register', 'https://chat-api.carum.dev/api/'), {
			method: 'POST',
			body: new FormData(event.target)
		})

		if (response.ok) {
			setToken(await response.json())
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
		setToken,
	}
}