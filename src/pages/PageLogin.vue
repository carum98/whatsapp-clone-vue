<script setup>
import { ref } from 'vue';

const isLogin = ref(true)

const login = async (event) => {
	const formData = new FormData(event.target)
	const formProps = Object.fromEntries(formData)

	const response = await fetch(new URL('login', 'http://localhost:3001/api/'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formProps)
	})

	const data = await response.json()
	console.log(data)
}

const register = async (event) => {
	const formData = new FormData(event.target)

	const response = await fetch(new URL('register', 'http://localhost:3001/api/'), {
		method: 'POST',
		body: formData
	})

	const data = await response.json()
	console.log(data)
}
</script>

<template>
	<form v-if="isLogin" class="login-form" @submit.prevent="login">
		<label>Correo</label>
		<input type="email" name="email" />

		<label>Contraseña</label>
		<input type="password" name="password" />

		<button type="submit">Iniciar sesión</button>

		<a @click="isLogin = false">Registrarse</a>
	</form>

	<form v-else class="login-form" @submit.prevent="register">
		<label>Nombre</label>
		<input type="text" name="name" />

		<label>Correo</label>
		<input type="email" name="email" />

		<label>Numero</label>
		<input type="tel" name="number" />

		<label>Contraseña</label>
		<input type="text" name="password" />

		<label>Imagen</label>
		<input type="file" name="image" />

		<button type="submit">Registrarse</button>
	</form>
</template>