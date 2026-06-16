<script setup lang="ts">
import type { LinkProps } from './link.types';

const props = withDefaults(defineProps<LinkProps>(), {
  variant: 'link',
  target: '_self',
});

const slots = useSlots();

const variants = {
  default: 'bg-purple-600 text-white',
  primary: 'bg-primary hover:bg-secondary-300 hover:text-default',
  outline: 'border border-primary text-primary hover:bg-secondary',
  link: 'text-primary hover:underline',
  custom: '',
};

const isExternal = computed(() => {
  if (typeof props.external === 'boolean') {
    return props.external;
  }

  return typeof props.to === 'string' && /^(https?:\/\/|mailto:|tel:)/.test(props.to);
});

const rel = computed(() => {
  if (props.rel !== undefined) {
    return props.rel;
  }

  return isExternal.value && props.target === '_blank' ? 'noopener noreferrer' : undefined;
});

const classes = computed(() => {
  if (props.variant === 'custom') {
    return undefined;
  }

  return [
    'inline-flex items-center justify-center gap-2.5 rounded-full transition-[color,background-color,border-color,opacity] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    variants[props.variant],
  ];
});

if (import.meta.env.DEV) {
  watchEffect(() => {
    if (slots.icon && !props.ariaLabel) {
      console.warn('[UiLink]: `ariaLabel` is recommended for icon-only links.');
    }
  });
}
</script>

<template>
  <NuxtLink
    :to="props.to"
    :external="isExternal"
    :target="props.target"
    :rel="rel"
    :aria-label="props.ariaLabel"
    :class="[classes, props.variant !== 'custom' && !$slots.icon && 'px-[14px] lg:px-6 py-[14px]']"
  >
    <slot v-if="slots.icon" name="icon" />
    <template v-else>
      <slot name="preIcon" />
      <slot />
      <slot name="postIcon" />
    </template>
  </NuxtLink>
</template>
