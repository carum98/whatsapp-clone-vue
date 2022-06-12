<script setup>
import PageLogin from './pages/PageLogin.vue';
import PageMain from './pages/PageMain.vue';

import { useAuth } from './composables/useAuth';

const { isAuthenticated } = useAuth();

const component = isAuthenticated ? PageMain : PageLogin;
</script>

<template>
  <component :is="component"></component>
</template>