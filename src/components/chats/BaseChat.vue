<script setup>
import { useDate } from '../../composables/useDate';

import Chat from '../../models/Chats';
import BaseAvatar from '../BaseAvatar.vue';
import IconCheck from '../icons/IconCheck.vue';

const { formatTime } = useDate();

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
			<BaseAvatar :size="49" :path="chat.image" />
		</div>

		<div class="chat__content">
			<div>
				<h1 class="chat__content--name">{{ chat.user }}</h1>
				<span class="chat__content--date">
					{{ chat.message.date ? formatTime(chat.message.date) : '' }}
				</span>
			</div>
			<div>
				<p class="chat__content--message">
					<IconCheck v-if="chat.message.isMine" :is-read="chat.message.isRead" />
					{{ chat.message.content }}
				</p>
				<span v-if="chat.count > 0" class="chat__content--counter">
					{{ chat.count }}
				</span>
			</div>
		</div>
	</article>
</template>