<script setup>
import { useChat } from '../../composables/useChat';
import TheConversation from '../conversation/TheConversation.vue';
const { chat } = useChat();
</script>

<template>
	<section id="content">
		<TheConversation v-if="chat" :chat="chat" :key="chat.id" />
	</section>
</template>