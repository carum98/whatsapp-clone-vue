import { ref } from 'vue'
import { useAuth } from './useAuth'

export function useFetch({ url, method = 'GET', classInstance, param }) {
	const data = ref(null)
	const error = ref(null)

	const fetchData = () => {
		useFetchData({ url, method, param })
			.then(res => {
				data.value = Array.isArray(res) ? res.map(v => new classInstance(v)) : new classInstance(res)
			})
			.catch(error => {
				error.value = error
			})
	}

	const onRefresh = () => {
		fetchData()
	}

	fetchData()

	return {
		data,
		error,
		onRefresh,
	}
}

export function useFetchData({ url, method, param }) {
	const { token, logout } = useAuth()

	return new Promise((resolve, reject) => {
		fetch(new URL(url, 'http://localhost:3001/api/'), {
			method,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token.value
			},
			body: JSON.stringify(param)
		})
			.then((res) => res.json())
			.then((json) => {
				resolve(json['data'])
			})
			.catch((err) => {
				logout()
				reject(err)
			})
	})
}

export function useFethImage(image) {
	const { token } = useAuth()
	const src = ref(null)

	fetch(new URL(image, 'http://localhost:3001/images/'), {
		headers: { 'Authorization': token.value }
	})
		.then(res => res.blob())
		.then(blob => {
			src.value.src = URL.createObjectURL(blob)
		})

	return {
		src,
	}
}
