<script setup>
import { onUnmounted, ref } from 'vue';
import { io } from "socket.io-client";
import { useAuth } from '../composables/useAuth';

const src = ref(null)
const { setToken } = useAuth()

const socket = io('http://localhost:3001/qr')

socket.on('connect', () => getQR(socket.id))

socket.on('qr:login', setToken)

onUnmounted(() => {
	socket.close()
})

const getQR = async (code) => {
	const res = await fetch(new URL('qr', 'http://localhost:3001/api/'), {
		method: 'POST',
		body: JSON.stringify({ code }),
		headers: {
			'Content-Type': 'application/json',
		},
	})

	src.value.src = await res.text()
}
</script>

<template>
	<img class="qrcode" ref="src" />
</template>

<style scoped lang="scss">
.qrcode {
	width: 264px;
	height: 264px;
}
</style>