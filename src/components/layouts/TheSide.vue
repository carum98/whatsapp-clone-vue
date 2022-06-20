<script setup>
import { useSideRouter } from '../../composables/useSideRouter';

const { component, push } = useSideRouter()
push('chats')
</script>

<template>
	<section id="side">
		<keep-alive>
			<component :is="component" :key="component" />
		</keep-alive>
	</section>
</template>
