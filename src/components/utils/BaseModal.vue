<script setup>
import { ref, defineExpose } from 'vue';
import IconTimes from '../icons/IconTimes.vue';
const dialog = ref(null)

const open = () => {
	dialog.value.showModal()
}

defineExpose({
	open
})
</script>

<template>
	<dialog ref="dialog">
		<button @click="dialog.close">
			<IconTimes />
		</button>
		<slot></slot>
	</dialog>
</template>

<style lang="scss">
dialog {
	border: unset;
	background-color: #202c33;
	border-radius: 10px;

	>button {
		color: #fff;
		position: absolute;
		right: 10px;
		top: 10px;

		svg {
			width: 25px;
			height: 25px;
		}
	}
}

dialog::backdrop {
	background-color: #000;
	opacity: 0.5;
}
</style>