<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    variant?: 'primary' | 'secondary'
    external?: boolean
    block?: boolean
  }>(),
  { variant: 'primary', external: false, block: false }
)
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener' : undefined"
    class="btn"
    :class="[variant === 'primary' ? 'btn-primary' : 'btn-secondary', block ? 'w-full' : '']"
  >
    <slot name="icon-left" />
    <slot />
    <slot name="icon-right" />
  </a>
</template>
