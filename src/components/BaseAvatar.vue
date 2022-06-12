<script setup>
const props = defineProps({
	avatar: {
		type: String,
		default: 'https://i.pravatar.cc/300'
	},
	size: {
		type: Number,
		default: 40
	}
});

let sizePx = props.size + 'px';
</script>

<template>
	<img :src="avatar" class="avatar" />
</template>

<style scoped lang="scss">
.avatar {
	width: v-bind(sizePx);
	height: v-bind(sizePx);
	border-radius: 50%;
}
</style>