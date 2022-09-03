<script setup>
import { ref } from 'vue';
import BaseQr from '../components/BaseQr.vue';
import BaseModal from '../components/utils/BaseModal.vue';
import PageLogin from './PageLogin.vue';

const modal = ref(null)
</script>

<template>
	<div class="landing">
		<header class="landing__header">
			<img src="/favicon.ico" />
			<h1>WHATSAPP WEB CLONE</h1>
		</header>
		<main class="landing__content">
			<div class="landing__content--main">
				<section>
					<p>To use WhatsApp-Clone on your computer:</p>

					<ol>
						<li>Open WhatsApp-Clone on your phone</li>
						<li>Tap scan code</li>
						<li>When the camera is activated, point your phone at this screen to scan the code</li>
					</ol>

					<a @click="modal.open">Iniciar sesión</a>

					<BaseModal ref="modal">
						<PageLogin />
					</BaseModal>
				</section>
				<section>
					<BaseQr />
				</section>
			</div>
		</main>
	</div>
</template>