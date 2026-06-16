<script setup>
import { AboutPage } from '@/pages/about';

useHead({
  title: 'О нас',
  meta: [
    { name: 'description', content: 'О нас' },
    { property: 'og:title', content: 'О нас' },
    { property: 'og:description', content: 'О нас' },
  ],
});
</script>

<template>
  <AboutPage />
</template>
