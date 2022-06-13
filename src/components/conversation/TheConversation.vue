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

import { useFetch } from '../../composables/useFetch';
import { useSocket } from '../../composables/useSocket';
import { ref } from 'vue';

const props = defineProps({
	chat: {
		type: Chat,
		required: true,
	},
});

const { data, onRefresh } = useFetch({
	url: `chats/${props.chat.id}/messages`,
	classInstance: Message
});

const { sendTyping } = useSocket(props.chat.id, onRefresh);

const focusIn = () => {
	sendTyping();
};

const focusOut = () => {
	sendTyping();
};

const message = ref('');
const send = () => {
	useFetch({
		url: `messages`,
		method: 'POST',
		param: {
			content: message.value,
			chat_id: props.chat.id,
		},
	});
}

</script>

<template>
	<div class="conversation">
		<header class="conversation__header">
			<div>
				<BaseAvatar />

				<h3>{{ chat.user }}</h3>
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
				<textarea v-model="message" placeholder="Escribe un mensaje aqui" @focusin="focusIn"
					@focusout="focusOut"></textarea>
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