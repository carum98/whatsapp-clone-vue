<script setup>
import Contact from '../../models/Contacts'
import BaseAvatar from '../BaseAvatar.vue'

defineProps({
	contact: {
		type: Contact,
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
				<h1 class="chat__content--name">{{ contact.name }}</h1>
			</div>
			<div>
				<p class="chat__content--message">
					{{ contact.number }}
				</p>
			</div>
		</div>
	</article>
</template>