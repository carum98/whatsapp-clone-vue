<script setup>
import { computed } from '@vue/reactivity';
import { useFethImage } from '../composables/useFetch';

const props = defineProps({
	size: {
		type: Number,
		default: 40
	},
	path: {
		type: String,
	}
});

const { src } = useFethImage(props.path);
const size = computed(() => props.size + 'px');
</script>

<template>
	<img ref="src" class="avatar" />
</template>

<style scoped lang="scss">
.avatar {
	width: v-bind(size);
	height: v-bind(size);
	border-radius: 50%;
}
</style>