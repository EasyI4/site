<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    bullets: string[]
    icon: string
    badge?: string
    featured?: boolean
  }>(),
  { featured: false }
)
</script>

<template>
  <article
    class="card card-hover group flex h-full flex-col p-7"
    :class="featured ? 'border-brand/45 shadow-glow-sm' : ''"
  >
    <!-- Selo -->
    <span
      v-if="badge"
      class="absolute right-5 top-5 rounded-full border border-hair bg-brand/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand"
    >
      {{ badge }}
    </span>

    <!-- Ícone -->
    <span
      class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-hair bg-brand/[0.07] text-brand transition-all duration-300 group-hover:shadow-glow-sm"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <path :d="icon" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>

    <h3 class="mb-3 font-sans text-xl font-semibold text-ink">{{ title }}</h3>
    <p class="mb-6 text-sm leading-relaxed text-muted">{{ description }}</p>

    <ul class="mt-auto space-y-2.5">
      <li
        v-for="b in bullets"
        :key="b"
        class="flex items-center gap-2.5 text-sm text-muted"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B2FF" stroke-width="2.2" class="shrink-0">
          <circle cx="12" cy="12" r="9" stroke-opacity="0.4" />
          <path d="M8 12l3 3 5-6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        {{ b }}
      </li>
    </ul>
  </article>
</template>
