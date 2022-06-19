import { computed, ref, markRaw } from "vue"

import TheChats from '../components/chats/TheChats.vue'
import TheContacts from '../components/contacts/TheContacts.vue'
import TheProfile from '../components/profile/TheProfile.vue'

const routes = [
	{ name: 'chats', component: markRaw(TheChats) },
	{ name: 'contacts', component: markRaw(TheContacts) },
	{ name: 'profile', component: markRaw(TheProfile) },
]

const history = ref([])

export function useSideRouter() {
	const push = (name) => {
		let route = routes.find(route => route.name === name)

		if (route) {
			history.value.push(route.component)
		}
	}

	const pop = () => {
		history.value.pop()
	}

	const component = computed(() => {
		return history.value.at(-1)
	})

	return {
		component,
		push,
		pop,
	}
}