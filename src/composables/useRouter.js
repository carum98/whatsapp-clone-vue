import { ref, computed, defineAsyncComponent } from "vue"

const routes = [
	{ name: 'main', component: defineAsyncComponent(() => import('../pages/PageMain.vue')) },
	{ name: 'landing', component: defineAsyncComponent(() => import('../pages/PageLanding.vue')) },
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