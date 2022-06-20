import { io } from "socket.io-client";
import { onUnmounted } from "vue";
import { useAuth } from "./useAuth";

export function useSocket(chatId) {
	const { token } = useAuth()

	const socket = io("http://localhost:3001/chats", {
		auth: { token },
		query: { chat_id: chatId },
		forceNew: true,
	});

	const sendTyping = () => {
		socket.emit('chat:typing')
	}

	socket.on('chat:connect', (payload) => {
		console.log('chat', payload.user)
	})

	onUnmounted(() => {
		socket.disconnect();
	})

	return {
		sendTyping,
		onTyping: (callback) => {
			socket.on('chat:typing', callback);
		},
		onMessage: (callback) => {
			socket.on('chat:message', callback);
		}
	}
}

export function useSocketUpdates() {
	const { token } = useAuth()

	const socket = io("http://localhost:3001/updates", {
		auth: { token },
		forceNew: true,
	})

	socket.on('updates:connect', (payload) => {
		console.log('updates', payload.user)
	})

	onUnmounted(() => {
		socket.disconnect()
	})

	return {
		onUpdate: (callback) => {
			socket.on('updates:message', callback)
		}
	}
}