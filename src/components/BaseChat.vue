<script setup>
import BaseAvatar from './BaseAvatar.vue';
import IconCheck from './icons/IconCheck.vue';

</script>

<template>
	<article class="chat">
		<div class="chat__avatar">
			<BaseAvatar :size="49" />
		</div>

		<div class="chat__content">
			<div>
				<h1 class="chat__content--name">Nombre</h1>
				<spam class="chat__content--date">lunes</spam>
			</div>
			<div>
				<p class="chat__content--message">
					<IconCheck />
					Mensaje
				</p>
				<span class="chat__content--counter">2</span>
			</div>
		</div>
	</article>
</template>