<script setup lang="ts">
withDefaults(
  defineProps<{
    subtitle?: string
    align?: 'center' | 'left'
  }>(),
  { align: 'center' }
)
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto text-center' : 'text-left'" class="max-w-2xl">
    <h2
      class="text-balance font-sans text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl"
    >
      <slot />
    </h2>
    <p v-if="subtitle" class="mt-4 text-base leading-relaxed text-muted sm:text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>
