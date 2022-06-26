<script setup>
import BaseQr from '../components/BaseQr.vue';
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
					<p>Para usar WhatsApp en tu computadora:</p>

					<ol>
						<li>Abre WhatsApp en tu teléfono</li>
						<li>Toca</li>
						<li>Cuando se active la cámara, apunta tu teléfono hacia esta pantalla para escanear el código
						</li>
					</ol>
				</section>
				<section>
					<BaseQr />
				</section>
			</div>
		</main>
	</div>
</template>