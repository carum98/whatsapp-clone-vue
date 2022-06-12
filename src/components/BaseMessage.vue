<script setup>
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
})
</script>

<template>
	<div class="message" :class="{ 'in': isIn, 'out': isOut }">
		<div>
			<p>Hola mundo</p>
			<span>
				8:00 p. m.
				<IconCheck v-if="isOut" />
			</span>
		</div>
	</div>
</template>