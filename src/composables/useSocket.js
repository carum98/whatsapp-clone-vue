import { io } from "socket.io-client";
import { onUnmounted } from "vue";
import { useAuth } from "./useAuth";
import { useFetchData } from "./useFetch";

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

	onUnmounted(() => {
		console.log("Chat disconnected")
		socket.disconnect();
	})

	return {
		sendTyping,
		onTyping: (callback) => {
			socket.on('chat:typing', callback);
		},
		onMessage: (callback) => {
			socket.on('chat:message', async (payload) => {
				const message = await useFetchData({ url: `messages/${payload.message_id}` })

				callback(message)

				if (!message.isMine) {
					socket.emit('chat:read', payload.message_id)
				}
			})
		}
	}
}
