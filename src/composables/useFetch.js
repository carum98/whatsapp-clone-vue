import { ref } from 'vue'
import { useAuth } from './useAuth'

export function useFetch({ url, method = 'GET', classInstance, param }) {
	const { token } = useAuth()

	const data = ref(null)
	const error = ref(null)

	const fetchData = () => {
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
				let value = json['data'].map(v => new classInstance(v))

				data.value = value

				console.log(value)
			})
			.catch((err) => (error.value = err))
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