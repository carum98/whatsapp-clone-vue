<script setup>
import Message from '../models/Messages';
import IconCheck from './icons/IconCheck.vue';
defineProps({
	isIn: {
		type: Boolean,
		default: false,
	},
	isOut: {
		type: Boolean,
		default: false,
	},
	message: {
		type: Message,
		required: true,
	}
})
</script>

<template>
	<div class="message" :class="{ 'in': isIn, 'out': isOut }">
		<div>
			<p>{{ message.content }}</p>
			<span>
				8:00 p. m.
				<IconCheck v-if="isOut" />
			</span>
		</div>
	</div>
</template>