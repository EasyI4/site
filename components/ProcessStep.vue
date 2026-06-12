<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="group relative flex flex-row gap-5 lg:flex-col lg:gap-0 lg:text-center">
    <!-- Círculo numerado -->
    <div class="relative z-10 flex shrink-0 justify-center lg:mb-6">
      <span
        class="flex h-14 w-14 items-center justify-center rounded-full border border-hair bg-surface-soft font-mono text-lg font-bold text-brand shadow-glow-sm transition-all duration-300 group-hover:border-brand group-hover:shadow-glow"
      >
        {{ number }}
      </span>
    </div>

    <div class="pb-2 lg:px-3">
      <h3 class="mb-2 font-sans text-lg font-semibold text-ink">{{ title }}</h3>
      <p class="text-sm leading-relaxed text-muted">{{ description }}</p>
    </div>
  </div>
</template>
