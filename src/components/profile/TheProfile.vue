<script setup>
import IconArrowLeft from '../icons/IconArrowLeft.vue'

import Contacts from '../../models/Contacts.js';
import BaseAvatar from '../BaseAvatar.vue'

import { useFetch } from '../../composables/useFetch'
import { useSideRouter } from '../../composables/useSideRouter'

const { pop } = useSideRouter()
const { data } = useFetch({ url: 'self', classInstance: Contacts })
</script>

<template>
	<header></header>
	<header>
		<button @click="pop">
			<IconArrowLeft />
		</button>
		<h3 style="margin-left: 20px;">Perfil</h3>
	</header>
	<section class="profile">
		<div>
			<BaseAvatar v-if="data" :size="250" :path="data.image" />
		</div>

		<div>
			<label>Tu nombre</label>
			<p>{{ data.name }}</p>
		</div>

		<div>
			<label>Tu número</label>
			<p>{{ data.number }}</p>
		</div>
	</section>
</template>