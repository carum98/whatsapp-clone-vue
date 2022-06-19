import { io } from "socket.io-client";
import { onUnmounted } from "vue";
import { useAuth } from "./useAuth";

export function useSocket(chatId) {
	const { token } = useAuth();

	const socket = io.connect("http://localhost:3001/chats", {
		auth: { token },
		query: { chat_id: chatId },
	});

	const sendTyping = () => {
		socket.emit('chat:typing')
	}

	socket.on('chat:connect', (payload) => {
		console.log(payload.user)
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