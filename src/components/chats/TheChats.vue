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
import { onUpdates } from '../../composables/onUpdates'
import Message from '../../models/Messages'

const { data } = useFetch({ url: 'chats', classInstance: Chat })
const { data: self } = useFetch({ url: 'self', classInstance: Contacts })

const { chat: current_chat, setChat } = useChat()
const { push } = useSideRouter()

const { onUpdate, onRead, onNewChat } = onUpdates()

onUpdate(({ message, chat_id }) => {
	let chat = data.value.find(chat => chat.id === chat_id)

	chat.message = new Message(message)

	if (!chat.message.isMine && (current_chat?.value?.id !== chat_id)) {
		chat.count = chat.count + 1
	}
})

onRead(({ chat_id }) => {
	let chat = data.value.find(chat => chat.id === chat_id)

	chat.count = 0
	chat.message.isRead = true
})

onNewChat(chat => {
	data.value.unshift(new Chat(chat))
})

const openChat = (chat) => {
	setChat(chat)

	data.value.find((chatt) => chatt.id === chat.id).count = 0
}
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
		<BaseChat v-for="chat in data" :key="chat.id" :chat="chat" @click="openChat(chat)" />
	</div>
</template>