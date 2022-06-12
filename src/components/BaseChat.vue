<script setup>
import Chat from '../models/Chats';
import BaseAvatar from './BaseAvatar.vue';
import IconCheck from './icons/IconCheck.vue';

defineProps({
	chat: {
		type: Chat,
		required: true,
	}
})

</script>

<template>
	<article class="chat">
		<div class="chat__avatar">
			<BaseAvatar :size="49" />
		</div>

		<div class="chat__content">
			<div>
				<h1 class="chat__content--name">{{ chat.user }}</h1>
				<span class="chat__content--date">{{ chat.date }}</span>
			</div>
			<div>
				<p class="chat__content--message">
					<IconCheck />
					{{ chat.lastMessage }}
				</p>
				<span class="chat__content--counter">
					2
				</span>
			</div>
		</div>
	</article>
</template>