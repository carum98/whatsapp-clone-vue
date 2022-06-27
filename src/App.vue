<script setup>
import { useAuth } from './composables/useAuth';
import { watch } from 'vue';
import { useRouter } from './composables/useRouter';

const { component, push } = useRouter()

const { isAuthenticated } = useAuth();

watch(isAuthenticated, (value) => {
	let app = document.getElementById('app')

	if (value) {
		app.classList.add('layout-main')
		push('main')
	} else {
		app.classList.add('layout-landing')
		push('landing')
	}
}, { immediate: true });
</script>

<template>
	<component :is="component"></component>
</template>