<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';

const isLogin = ref(true)

const { login, register } = useAuth()
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