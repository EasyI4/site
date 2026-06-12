<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message?: string } }>()
function back() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <div class="pointer-events-none absolute inset-0 -z-10 bg-grid bg-grid opacity-40 mask-fade-b" />
    <SectionBadge :label="`Erro ${props.error.statusCode}`" />
    <h1 class="mt-6 font-sans text-4xl font-bold tracking-tight text-ink">Página não encontrada.</h1>
    <p class="mt-4 max-w-md text-muted">
      A página que você procura não existe ou foi movida. Vamos te levar de volta ao início.
    </p>
    <button class="btn btn-primary mt-8" @click="back">Voltar ao início</button>
  </div>
</template>
