<script setup lang="ts">
const items = [
  { value: '+50 projetos', label: 'entregues em produção' },
  { value: '+10 anos', label: 'de experiência em sistemas, integrações e IA' },
  { value: 'IA integrada', label: 'a CRM, ERP, APIs e bancos de dados' },
  { value: 'Suporte contínuo', label: 'evolução e sustentação dos sistemas' },
  { value: 'Menos retrabalho', label: 'mais escala na operação' }
]
</script>

<template>
  <div class="marquee relative border-y border-hair bg-surface-soft/60 py-5 backdrop-blur-sm">
    <div class="marquee__track flex w-max">
      <div v-for="g in 2" :key="g" class="marquee__group flex shrink-0 items-center" :aria-hidden="g === 2 ? 'true' : undefined">
        <div v-for="(it, i) in items" :key="`${g}-${i}`" class="flex items-center">
          <span class="flex items-center gap-2.5 whitespace-nowrap px-8">
            <span class="font-sans text-lg font-bold tracking-tight text-brand">{{ it.value }}</span>
            <span class="text-sm text-muted">{{ it.label }}</span>
          </span>
          <span class="h-1.5 w-1.5 rounded-full bg-brand/50" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 8%,
    black 92%,
    transparent
  );
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.marquee__track {
  animation: marquee 38s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
  }
}
</style>
