<script setup>
import Chat from '../../models/Chats';
import Message from '../../models/Messages';

import BaseAvatar from '../BaseAvatar.vue';
import BaseMessage from '../BaseMessage.vue';

import IconSearch from '../icons/IconSearch.vue';
import IconMoreVert from '../icons/IconMoreVert.vue';
import IconSmile from '../icons/IconSmile.vue';
import IconClip from '../icons/IconClip.vue';
import IconPtt from '../icons/IconPtt.vue';
import IconSend from '../icons/IconSend.vue';

import { useFetch, useFetchData } from '../../composables/useFetch';
import { useSocket } from '../../composables/useSocket';
import { ref } from 'vue';

const typing = ref(false);
const message = ref('');

const props = defineProps({
	chat: {
		type: Chat,
		required: true,
	},
});

const { sendTyping, onTyping, onMessage } = useSocket(props.chat.id);

const { data } = useFetch({
	url: `chats/${props.chat.id}/messages`,
	classInstance: Message
})

onTyping(() => {
	typing.value = !typing.value;
})

onMessage(async ({ message_id }) => {
	const message = await useFetchData({ url: `messages/${message_id}` })
	data.value.unshift(new Message(message))
})

const send = () => {
	useFetchData({
		url: `messages`,
		method: 'POST',
		param: {
			content: message.value,
			chat_id: props.chat.id,
		},
	})
		.then(response => {
			message.value = ''
		})
}

</script>

<template>
	<div class="conversation">
		<header class="conversation__header">
			<div>
				<BaseAvatar :path="chat.image" />

				<div>
					<h4>{{ chat.user }}</h4>
					<span v-if="typing">Escribiendo...</span>
				</div>
			</div>

			<div class="actions">
				<button>
					<IconSearch />
				</button>
				<button>
					<IconMoreVert />
				</button>
			</div>
		</header>

		<div class="conversation__panel">
			<BaseMessage v-for="message in data" :message="message" />
		</div>

		<footer class="conversation__footer">
			<button>
				<IconSmile />
			</button>
			<button>
				<IconClip />
			</button>
			<div class="conversation__footer--message">
				<textarea v-model="message" placeholder="Escribe un mensaje aqui" @focusin="sendTyping"
					@focusout="sendTyping"></textarea>
			</div>
			<button v-if="message.length === 0">
				<IconPtt />
			</button>
			<button v-else @click="send">
				<IconSend />
			</button>
		</footer>
	</div>
</template>