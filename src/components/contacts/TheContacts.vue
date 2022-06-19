<script setup>
import IconArrowLeft from '../icons/IconArrowLeft.vue'
import IconSearch from '../icons/IconSearch.vue'

import { useFetch, useFetchData } from '../../composables/useFetch'
import { useChat } from '../../composables/useChat'

import Contacts from '../../models/Contacts'
import BaseContact from './BaseContact.vue';
import Chat from '../../models/Chats'
import { useSideRouter } from '../../composables/useSideRouter'

const { pop } = useSideRouter()

const { data } = useFetch({ url: 'contacts', classInstance: Contacts })
const { setChat } = useChat()

const openChat = async (contact) => {
	const res = await useFetchData({ url: 'chats', method: 'POST', param: { number: contact.number } })

	setChat(new Chat(res))
}
</script>

<template>
	<header></header>
	<header>
		<button @click="pop">
			<IconArrowLeft />
		</button>
		<h3 style="margin-left: 20px;">Nuevo chat</h3>
	</header>
	<div class="search">
		<div>
			<span>
				<IconSearch />
			</span>
			<input type="text" placeholder="Buscar contactos" />
		</div>
	</div>
	<div class="list">
		<BaseContact v-for="contact in data" :contact="contact" @click="openChat(contact)" />
	</div>
</template>