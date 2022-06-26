<script setup>
import { ref } from 'vue';

const src = ref(null)

fetch(new URL('qr', 'http://localhost:3001/api/'))
	.then(res => res.text())
	.then(data => src.value.src = data)
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