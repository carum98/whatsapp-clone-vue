<script setup>
import { useChat } from '../../composables/useChat';
import TheConversation from '../conversation/TheConversation.vue';
import LadingBanner from '../../assets/LadingBanner.vue';
const { chat } = useChat();
</script>

<template>
	<section id="content" :class="{ banner: chat === null }">
		<TheConversation v-if="chat" :chat="chat" :key="chat.id" />

		<div v-else>
			<LadingBanner />
			<h1>WhatsApp Web Clone</h1>
		</div>
	</section>
</template>