<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Mapeamos processos, gargalos, sistemas e objetivos.'
  },
  {
    number: '02',
    title: 'Arquitetura',
    description: 'Desenhamos sistema, integrações, automações, dados e IA.'
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Construímos com entregas contínuas, seguras e escaláveis.'
  },
  {
    number: '04',
    title: 'Produção e evolução',
    description: 'No ar, integrado ao que você já usa e evoluindo com os dados.'
  }
]
</script>

<template>
  <section id="processo" class="relative py-24 lg:py-32">
    <div class="container-px">
      <div class="mb-16 flex flex-col items-center gap-5" v-reveal>
        <SectionBadge label="Como trabalhamos" />
        <SectionTitle subtitle="Do diagnóstico à evolução contínua. Entregas que você acompanha de perto.">
          Da operação travada ao <span class="text-brand">sistema em produção</span>
        </SectionTitle>
      </div>

      <div class="relative">
        <!-- Linha conectora (desktop) -->
        <div
          class="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block"
        />
        <!-- Linha conectora (mobile) -->
        <div
          class="pointer-events-none absolute bottom-0 left-7 top-0 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent lg:hidden"
        />

        <div class="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
          <div v-for="(s, i) in steps" :key="s.number" v-reveal="i * 100">
            <ProcessStep :number="s.number" :title="s.title" :description="s.description" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
