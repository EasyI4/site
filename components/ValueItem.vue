<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <div class="flex gap-4">
    <span
      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hair bg-brand/[0.07] text-brand"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
        <path :d="icon" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
    <div>
      <h3 class="mb-1.5 font-sans text-base font-semibold text-ink">{{ title }}</h3>
      <p class="text-sm leading-relaxed text-muted">{{ description }}</p>
    </div>
  </div>
</template>
