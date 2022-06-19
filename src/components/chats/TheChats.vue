<script setup>
import BaseAvatar from '../BaseAvatar.vue'
import BaseChat from './BaseChat.vue'

import IconStatus from '../icons/IconStatus.vue'
import IconMessage from '../icons/IconMessage.vue'
import IconMoreVert from '../icons/IconMoreVert.vue'
import IconSearch from '../icons/IconSearch.vue'
import { useFetch } from '../../composables/useFetch'
import { useChat } from '../../composables/useChat'
import { useSideRouter } from '../../composables/useSideRouter'

import Chat from '../../models/Chats'
import Contacts from '../../models/Contacts'

const { data } = useFetch({ url: 'chats', classInstance: Chat })
const { data: self } = useFetch({ url: 'self', classInstance: Contacts })

const { setChat } = useChat()
const { push } = useSideRouter()
</script>

<template>
	<header>
		<div>
			<button @click="push('profile')">
				<BaseAvatar v-if="self" :path="self.image" />
			</button>
		</div>
		<div class="actions">
			<button>
				<IconStatus />
			</button>
			<button @click="push('contacts')">
				<IconMessage />
			</button>
			<button>
				<IconMoreVert />
			</button>
		</div>
	</header>
	<div class="search">
		<div>
			<span>
				<IconSearch />
			</span>
			<input type="text" placeholder="Buscar un chat o inicia uno nuevo" />
		</div>
	</div>
	<div class="list">
		<BaseChat v-for="chat in data" :chat="chat" @click="setChat(chat)" />
	</div>
</template>