import { ref } from 'vue'
import { useAuth } from './useAuth'

export function useFetch({ url, method = 'GET', classInstance, param }) {
	const data = ref(null)
	const error = ref(null)

	const fetchData = () => {
		useFetchData({ url, method, param })
			.then(res => {
				data.value = res.map(v => new classInstance(v))
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
	const { token } = useAuth()

	return new Promise((resolve, reject) => {
		fetch(new URL(url, 'http://localhost:3001/api/'), {
			method,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			},
			body: JSON.stringify(param)
		})
			.then((res) => res.json())
			.then((json) => {
				resolve(json['data'])
			})
			.catch((err) => (
				reject(err)
			))
	})
}
