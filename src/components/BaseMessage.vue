<script setup>
import { useDate } from '../composables/useDate';
import Message from '../models/Messages';
import IconCheck from './icons/IconCheck.vue';

const { formatTime } = useDate();

defineProps({
	message: {
		type: Message,
		required: true,
	}
})
</script>

<template>
	<div class="message" :class="{ 'in': message.isMine, 'out': !message.isMine }">
		<div>
			<p>{{ message.content }}</p>
			<span>
				{{ formatTime(message.date) }}
				<IconCheck v-if="!message.isMine" />
			</span>
		</div>
	</div>
</template>