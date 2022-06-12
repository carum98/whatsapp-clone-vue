export function useAuth() {
	const token = localStorage.getItem('token')
	const isAuthenticated = !!token

	const auth = {
		isAuthenticated,
		token,
		login: (token) => {
			localStorage.setItem('token', token)
			auth.isAuthenticated = true
			auth.token = token
		}
	}

	return auth
}