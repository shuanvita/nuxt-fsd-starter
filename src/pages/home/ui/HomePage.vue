<script setup lang="ts"></script>
<template>
  <nuxt-link to="/about">
    <SvgLink class="max-w-6 text-orange-500" />
    <nuxt-picture src="/images/image.jpg" />
  </nuxt-link>
  <ui-button variant="custom" aria-label="button">
    <template #icon>
      <svg-link class="w-6 h-6 text-purple-600" />
    </template>
  </ui-button>
  <ui-link to="https://nuxt.com" target="_blank" variant="outline">Nuxt</ui-link>
</template>
