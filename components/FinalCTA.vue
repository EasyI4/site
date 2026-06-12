<script setup lang="ts">
const whatsapp =
  'https://wa.me/554791001461?text=Quero%20diagnosticar%20minha%20opera%C3%A7%C3%A3o%20com%20a%20EasyIA'
</script>

<template>
  <section id="contato" class="relative py-20 lg:py-24">
    <div class="container-px">
      <div
        class="card relative mx-auto max-w-3xl overflow-hidden p-10 text-center shadow-glow lg:p-14"
        v-reveal
      >
        <div class="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-[0.15]" />
        <div
          class="pointer-events-none absolute left-1/2 top-0 -z-0 h-56 w-[560px] max-w-[90%] -translate-x-1/2 rounded-full bg-brand/15 blur-[100px]"
        />

        <div class="relative">
          <div class="flex justify-center">
            <SectionBadge label="Diagnóstico" />
          </div>

          <h2
            class="mt-6 text-balance font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Sua operação já mostra onde a IA pode gerar resultado.
            <span class="text-brand">Falta conectar os pontos.</span>
          </h2>
          <p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Em um diagnóstico, mapeamos gargalos, processos repetitivos e oportunidades reais de
            automação na sua empresa.
          </p>

          <div class="mt-9 flex justify-center">
            <a
              :href="whatsapp"
              target="_blank"
              rel="noopener"
              class="wa-shine btn bg-[#22C55E] text-white shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 hover:bg-[#1FB155] hover:shadow-[0_0_55px_rgba(34,197,94,0.45)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.2-.9-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.3.1.7-.1 1.3z" />
              </svg>
              Diagnosticar minha operação
            </a>
          </div>

          <p class="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted/80">
            Sem promessa vazia. Primeiro entendemos a operação. Depois desenhamos a solução.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wa-shine {
  position: relative;
  overflow: hidden;
}

.wa-shine::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 45%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.55),
    transparent
  );
  transform: translateX(-220%) skewX(-18deg);
  animation: wa-sweep 2.8s ease-in-out infinite;
}

@keyframes wa-sweep {
  0% {
    transform: translateX(-220%) skewX(-18deg);
  }
  55%,
  100% {
    transform: translateX(360%) skewX(-18deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wa-shine::after {
    animation: none;
    display: none;
  }
}
</style>
