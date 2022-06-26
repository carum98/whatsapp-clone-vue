import { io } from "socket.io-client";
import { useAuth } from "./useAuth";

const { token } = useAuth()

const socket = io("http://localhost:3001/updates", {
	auth: { token },
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
		}
	}
}