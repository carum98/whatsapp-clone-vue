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

import { useFetch } from '../../composables/useFetch';

const props = defineProps({
	chat: {
		type: Chat,
		required: true,
	},
});

const { data } = useFetch({
	url: `chats/${props.chat.id}/messages`,
	classInstance: Message
});
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
			<BaseMessage v-for="message in data" :message="message" is-in />
		</div>

		<footer class="conversation__footer">
			<button>
				<IconSmile />
			</button>
			<button>
				<IconClip />
			</button>
			<div class="conversation__footer--message">
				<textarea placeholder="Escribe un mensaje aqui"></textarea>
			</div>
			<button>
				<IconPtt />
			</button>
		</footer>
	</div>
</template>