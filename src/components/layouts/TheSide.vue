<script setup>
import { ref } from 'vue';
import TheChats from '../chats/TheChats.vue'
import TheContacts from '../contacts/TheContacts.vue'

const toggle = ref(true)
</script>

<template>
	<section id="side">
		<TheChats v-if="toggle" @open="toggle = false" />
		<TheContacts v-else @close="toggle = true" />
	</section>
</template>
