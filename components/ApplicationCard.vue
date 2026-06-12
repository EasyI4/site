<script setup lang="ts">
defineProps<{
  title: string
  description: string
  bullets: string[]
  icon: string
}>()
</script>

<template>
  <article class="card card-hover group flex h-full flex-col p-7">
    <span
      class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-hair bg-brand/[0.07] text-brand transition-all duration-300 group-hover:shadow-glow-sm"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <path :d="icon" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>

    <h3 class="mb-3 font-sans text-lg font-semibold text-ink">{{ title }}</h3>
    <p class="mb-6 text-sm leading-relaxed text-muted">{{ description }}</p>

    <ul class="mt-auto space-y-2.5">
      <li
        v-for="b in bullets"
        :key="b"
        class="flex items-start gap-2.5 text-sm text-muted"
      >
        <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
        {{ b }}
      </li>
    </ul>
  </article>
</template>
