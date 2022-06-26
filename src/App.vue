<script setup>
import PageLogin from './pages/PageLogin.vue';
import PageMain from './pages/PageMain.vue';
import PageLanding from './pages/PageLanding.vue';
import { useAuth } from './composables/useAuth';
import { watch } from 'vue';

const { isAuthenticated } = useAuth();

const component = isAuthenticated ? PageMain : PageLanding;

watch(isAuthenticated, (value) => {
  let app = document.getElementById('app')

  if (value) {
    app.classList.add('layout-main')
  } else {
    app.classList.add('layout-landing')
  }
}, { immediate: true });
</script>

<template>
  <component :is="component"></component>
</template>