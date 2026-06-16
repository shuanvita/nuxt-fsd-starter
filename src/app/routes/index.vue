<script setup lang="ts">
import { HomePage } from '@/pages/home';

useHead({
  title: 'Главная страница',
  meta: [
    { name: 'description', content: 'Главная страница' },
    { property: 'og:title', content: 'Главная страница' },
    { property: 'og:description', content: 'Главная страница' },
  ],
});
</script>

<template>
  <HomePage />
</template>
