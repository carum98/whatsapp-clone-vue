import { io } from "socket.io-client";
import { onUnmounted } from "vue";
import { useAuth } from "./useAuth";

export function useSocket(clientId) {
	const { token } = useAuth();

	const socket = io.connect("http://localhost:3001/chats", {
		auth: { token },
		query: { chat_id: clientId },
	});

	const sendTyping = () => {
		socket.emit('chat:typing')
	}

	socket.on('chat:connect', (payload) => {
		console.log(payload.user)
	})

	socket.on('chat:typing', () => {
		console.log("typing")
	})

	socket.on('chat:message', (payload) => {
		console.log(payload)
	})

	onUnmounted(() => {
		socket.disconnect();
	})

	return {
		sendTyping,
	}
}