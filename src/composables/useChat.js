import { ref } from "vue";

const chat = ref(null)

export function useChat() {
	const setChat = (value) => {
		return chat.value = value
	}

	return {
		chat,
		setChat,
	}
}