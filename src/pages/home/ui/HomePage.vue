<script setup lang="ts"></script>
<template>
  <NuxtLink to="/about">
    <SvgLink class="max-w-6 text-orange-500" aria-hidden="true" />
    <NuxtPicture src="/images/image.jpg" alt="Пример изображения" width="1200" height="800" />
  </NuxtLink>
  <UiButton variant="custom" aria-label="button">
    <template #icon>
      <SvgLink class="w-6 h-6 text-purple-600" aria-hidden="true" />
    </template>
  </UiButton>
  <UiLink to="https://nuxt.com" target="_blank" variant="outline">Nuxt</UiLink>
</template>
