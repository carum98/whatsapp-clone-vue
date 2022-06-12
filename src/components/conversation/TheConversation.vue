<script setup>
import BaseAvatar from '../BaseAvatar.vue';

import IconSearch from '../icons/IconSearch.vue';
import IconMoreVert from '../icons/IconMoreVert.vue';
import IconSmile from '../icons/IconSmile.vue';
import IconClip from '../icons/IconClip.vue';
import IconPtt from '../icons/IconPtt.vue';

</script>

<template>
	<div class="conversation">
		<header class="conversation__header">
			<div>
				<BaseAvatar />

				<h3>Hola</h3>
			</div>

			<div class="actions">
				<button>
					<IconSearch />
				</button>
				<button>
					<IconMoreVert />
				</button>
			</div>
		</header>

		<section class="conversation__panel">

		</section>

		<footer class="conversation__footer">
			<button>
				<IconSmile />
			</button>
			<button>
				<IconClip />
			</button>
			<div class="conversation__footer--message">
				<textarea placeholder="Escribe un mensaje aqui"></textarea>
			</div>
			<button>
				<IconPtt />
			</button>
		</footer>
	</div>
</template>