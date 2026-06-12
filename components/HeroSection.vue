<script setup lang="ts">
const metrics = [
  { value: '50+', label: 'Projetos Entregues' },
  { value: '98%', label: 'Satisfação' },
  { value: '24/7', label: 'Suporte' }
]

const ctaHref =
  'https://wa.me/554791001461?text=Quero%20diagnosticar%20minha%20opera%C3%A7%C3%A3o%20com%20a%20EasyIA'
</script>

<template>
  <section id="inicio" class="relative isolate overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
    <!-- Grid + glow + rede neural -->
    <div class="pointer-events-none absolute inset-0 -z-10 bg-grid bg-grid opacity-40 mask-fade-b" />
    <div
      class="pointer-events-none absolute left-1/2 top-16 -z-10 h-[460px] w-[900px] max-w-[92vw] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px] animate-pulse-glow"
    />
    <NeuralBackground />

    <div class="container-px">
      <div class="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div v-reveal>
          <SectionBadge label="IA aplicada à operação real" />
        </div>

        <h1
          class="mt-7 font-sans text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[5.5rem]"
          v-reveal="60"
        >
          <span class="block">Inteligência que</span>
          <span class="block text-brand">escala resultados</span>
        </h1>

        <p class="mt-7 max-w-2xl text-lg leading-relaxed text-muted" v-reveal="120">
          Automatizamos processos, conectamos dados e construímos sistemas com IA integrada.
          Menos retrabalho. Mais escala.
        </p>

        <div class="mt-10 flex w-full flex-col justify-center gap-4 sm:flex-row" v-reveal="180">
          <CTAButton :href="ctaHref" external>
            Diagnosticar minha operação
            <template #icon-right>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </template>
          </CTAButton>
          <CTAButton href="#solucoes" variant="secondary">
            <template #icon-left>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="9" stroke-opacity="0.5" />
                <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
              </svg>
            </template>
            Ver Soluções
          </CTAButton>
        </div>

        <!-- Métricas -->
        <div class="mt-16 grid w-full max-w-xl grid-cols-3 gap-6" v-reveal="240">
          <div v-for="m in metrics" :key="m.label" class="flex flex-col items-center">
            <span class="font-sans text-3xl font-bold text-brand sm:text-4xl">{{ m.value }}</span>
            <span class="mt-1 text-xs uppercase tracking-wider text-muted sm:text-sm">
              {{ m.label }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
