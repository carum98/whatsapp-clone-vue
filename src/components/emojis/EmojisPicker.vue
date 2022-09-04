<script setup>
import { ref } from 'vue';
import IconBear from '../icons/IconBear.vue';
import IconCup from '../icons/IconCup.vue';
import IconBall from '../icons/IconBall.vue';
import IconCar from '../icons/IconCar.vue';
import IconLightbulb from '../icons/IconLightbulb.vue';
import IconSymbol from '../icons/IconSymbol.vue';
import IconFlag from '../icons/IconFlag.vue';

const data = ref([])
const selected = ref(0)

fetch(new URL('emojis', 'https://chat-api.carum.dev/api/'))
	.then(response => response.json())
	.then(emojis => {
		data.value = emojis
	});

const emit = defineEmits(['input']);

const click = (item) => {
	emit('input', item.emoji)
}

const categories = [
	IconBear,
	IconCup,
	IconBall,
	IconCar,
	IconLightbulb,
	IconSymbol,
	IconFlag,
]

const scrollToCategory = (index) => {
	selected.value = index

	const element = document.querySelector(`[data-index="${index}"]`)

	element.scrollIntoView({ behavior: 'smooth' });
}

</script>

<template>
	<section>
		<div class="emojis-picker__tabs">
			<button v-for="(item, index) in categories" :class="{ active: selected === index }"
				@click="scrollToCategory(index)">
				<component :is="item"></component>
			</button>
		</div>

		<div class="emojis-picker__content">
			<section v-for="(value, key, index) in data" :data-index="index">
				<label>{{ key }}</label>
				<div>
					<span v-for="item in value" @click="click(item)">
						{{ item.emoji }}
					</span>
				</div>
			</section>
		</div>
	</section>
</template>