import { ref, computed, markRaw } from "vue"

import PageMain from '../pages/PageMain.vue';
import PageLanding from '../pages/PageLanding.vue';

const routes = [
	{ name: 'main', component: markRaw(PageMain) },
	{ name: 'landing', component: markRaw(PageLanding) },
]

const history = ref([])

export function useRouter() {
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