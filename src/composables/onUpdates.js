import { io } from "socket.io-client";
import { useAuth } from "./useAuth";

const { token } = useAuth()

const socket = io("https://chat-api.carum.dev/updates", {
	auth: { token: token.value },
	forceNew: true,
})

export function onUpdates() {
	return {
		onUpdate: (callback) => {
			socket.on('updates:message', callback)
		},
		onRead: (callback) => {
			socket.on('updates:read', (payload) => {
				payload.forEach(callback)
			})
		},
		onNewChat: (callback) => {
			socket.on('updates:chat', callback)
		},
		disconnect: () => {
			socket.disconnect()
		}
	}
}