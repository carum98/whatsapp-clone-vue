<script setup>
import BaseAvatar from '../BaseAvatar.vue';
import BaseChat from '../BaseChat.vue';

import IconStatus from '../icons/IconStatus.vue';
import IconMessage from '../icons/IconMessage.vue';
import IconMoreVert from '../icons/IconMoreVert.vue';
import IconSearch from '../icons/IconSearch.vue';
import { useFetch } from '../../composables/useFetch';
import { useChat } from '../../composables/useChat';

import Chat from '../../models/Chats';

const { data } = useFetch({ url: 'chats', classInstance: Chat });
const { setChat } = useChat();

</script>

<template>
	<section id="side">
		<header>
			<div>
				<BaseAvatar />
			</div>
			<div class="actions">
				<button>
					<IconStatus />
				</button>
				<button>
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
		<div class="chats">
			<BaseChat v-for="chat in data" :chat="chat" @click="setChat(chat)" />
		</div>
	</section>
</template>
