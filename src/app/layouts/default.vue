<script setup lang="ts">
import { AppHeader } from '@/widgets/AppHeader';
import { AppFooter } from '@/widgets/AppFooter';
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
