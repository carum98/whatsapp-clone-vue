<script setup>
import { ref, watch } from 'vue';
import { useAuth } from '../composables/useAuth';

const isLogin = ref(true)
const demo = ref('')

const { login, register } = useAuth()

watch(demo, (val) => {
  const email = document.querySelector('.login-form input[name="email"]')
  const password = document.querySelector('.login-form input[name="password"]')

  email.value = val
  password.value = '12345'
})
</script>

<template>


	<form v-if="isLogin" class="login-form" @submit.prevent="login">
		<label>Correo</label>
		<input type="email" name="email" />

		<label>Contraseña</label>
		<input type="password" name="password" />

		<button type="submit">Iniciar sesión</button>

		<a @click="isLogin = false">Registrarse</a>

		<select class="select-user-demo" v-model="demo">
			<option value="" selected disabled hidden>Select demo user</option>
			<option value="maria@gmail.com">Maria</option>
			<option value="pedro@gmail.com">Pedro</option>
			<option value="eduardo@gmail.com">Eduardo</option>
		</select>
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