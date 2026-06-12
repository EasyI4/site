<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full border border-hair bg-brand/[0.06] px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand"
  >
    <span class="h-1.5 w-1.5 rounded-full bg-brand shadow-glow-sm" />
    {{ label }}
  </span>
</template>
