<script setup lang="ts">
const values = [
  {
    title: 'Governança e segurança',
    description:
      'Seus dados protegidos do início ao fim: controle de acesso, rastreabilidade e conformidade em toda a integração.',
    icon: 'M12 3l8 4v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V7z M9.5 12l2 2 3.5-4'
  },
  {
    title: 'Integração de sistemas',
    description:
      'CRM, ERP e APIs conversando entre si. Menos silos e retrabalho, mais fluidez entre as áreas.',
    icon: 'M7 8a3 3 0 100 6h2m6-6a3 3 0 110 6h-2m-5-3h6'
  },
  {
    title: 'Eficiência operacional',
    description:
      'Automação com métricas claras para você enxergar e provar o ganho de produtividade e qualidade.',
    icon: 'M3 17l6-6 4 4 8-8m0 0h-5m5 0v5'
  }
]

</script>

<template>
  <section id="sobre" class="relative overflow-hidden py-24 lg:py-32">
    <!-- Glow de fundo -->
    <div
      class="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand/5 blur-[120px]"
    />

    <div class="container-px">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Texto + valores -->
        <div>
          <div v-reveal>
            <SectionBadge label="Sobre nós" />
            <h2
              class="mt-5 text-balance font-sans text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl"
            >
              Tecnologia que vira <span class="text-brand">resultado na operação</span>
            </h2>
            <p class="mt-5 max-w-xl text-base leading-relaxed text-muted">
              <span class="font-semibold text-ink">Não apenas integramos: também desenvolvemos.</span>
              Sistemas sob medida com IA conectada aos seus dados e processos. Governança e ganho
              real, do desenvolvimento à sustentação.
            </p>
          </div>

          <div class="mt-10 space-y-3">
            <div
              v-for="(v, i) in values"
              :key="v.title"
              v-reveal="i * 90"
              class="rounded-xl border border-transparent p-3 transition-colors duration-300 hover:border-hair hover:bg-white/[0.02]"
            >
              <ValueItem :title="v.title" :description="v.description" :icon="v.icon" />
            </div>
          </div>
        </div>

        <!-- Organograma de entrega -->
        <div v-reveal="120">
          <div class="card overflow-hidden p-1 shadow-glow-sm">
            <div class="relative rounded-xl bg-surface-soft/80 p-6 lg:p-7">
              <div class="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-[0.15]" />

              <div class="relative">
                <div class="mb-5 flex items-center justify-between">
                  <p class="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    Estrutura de entrega
                  </p>
                  <span
                    class="rounded-full border border-brand/30 bg-brand/[0.08] px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-brand"
                  >
                    Desenvolve + Integra
                  </span>
                </div>

                <!-- Diagrama SVG (escala via viewBox) -->
                <svg
                  viewBox="0 0 440 300"
                  class="h-auto w-full"
                  role="img"
                  aria-label="Organograma: EasyIA desenvolve e integra, conectando Web e Mobile, APIs e Backend, CRM e ERP, IA e Dados."
                >
                  <!-- Conectores -->
                  <g fill="none" stroke="rgba(0,178,255,0.45)" stroke-width="1.5">
                    <path class="flow" d="M220 54 V80 H110 V104" />
                    <path class="flow" d="M220 54 V80 H330 V104" />
                    <path class="flow" d="M110 144 V178 H58 V206" />
                    <path class="flow" d="M110 144 V178 H162 V206" />
                    <path class="flow" d="M330 144 V178 H278 V206" />
                    <path class="flow" d="M330 144 V178 H382 V206" />
                  </g>

                  <!-- Hub -->
                  <g class="hub">
                    <rect x="165" y="14" width="110" height="40" rx="12"
                      fill="rgba(0,178,255,0.14)" stroke="rgba(0,178,255,0.55)" stroke-width="1.5" />
                    <circle cx="184" cy="34" r="3" fill="#00B2FF" />
                    <text x="226" y="39" text-anchor="middle" font-family="'Space Grotesk', sans-serif"
                      font-size="15" font-weight="700" fill="#00B2FF">EasyIA</text>
                  </g>

                  <!-- Nível 1 -->
                  <g font-family="'Space Grotesk', sans-serif">
                    <rect x="46" y="104" width="128" height="40" rx="11"
                      fill="rgba(13,33,52,0.9)" stroke="rgba(0,178,255,0.22)" stroke-width="1" />
                    <text x="110" y="129" text-anchor="middle" font-size="13" font-weight="600" fill="#D7F1FF">Desenvolvimento</text>

                    <rect x="266" y="104" width="128" height="40" rx="11"
                      fill="rgba(13,33,52,0.9)" stroke="rgba(0,178,255,0.22)" stroke-width="1" />
                    <text x="330" y="129" text-anchor="middle" font-size="13" font-weight="600" fill="#D7F1FF">Integração</text>
                  </g>

                  <!-- Nível 2 -->
                  <g font-family="'Space Grotesk', sans-serif">
                    <rect x="8" y="206" width="100" height="44" rx="10"
                      fill="rgba(10,26,40,0.9)" stroke="rgba(0,178,255,0.18)" stroke-width="1" />
                    <text x="58" y="233" text-anchor="middle" font-size="11" fill="#A8B9C8">Web &amp; Mobile</text>

                    <rect x="112" y="206" width="100" height="44" rx="10"
                      fill="rgba(10,26,40,0.9)" stroke="rgba(0,178,255,0.18)" stroke-width="1" />
                    <text x="162" y="233" text-anchor="middle" font-size="11" fill="#A8B9C8">APIs &amp; Backend</text>

                    <rect x="228" y="206" width="100" height="44" rx="10"
                      fill="rgba(10,26,40,0.9)" stroke="rgba(0,178,255,0.18)" stroke-width="1" />
                    <text x="278" y="233" text-anchor="middle" font-size="11" fill="#A8B9C8">CRM &amp; ERP</text>

                    <rect x="332" y="206" width="100" height="44" rx="10"
                      fill="rgba(10,26,40,0.9)" stroke="rgba(0,178,255,0.18)" stroke-width="1" />
                    <text x="382" y="233" text-anchor="middle" font-size="11" fill="#A8B9C8">IA &amp; Dados</text>
                  </g>

                  <!-- Pontos de junção -->
                  <g fill="#00B2FF">
                    <circle cx="110" cy="104" r="2.5" />
                    <circle cx="330" cy="104" r="2.5" />
                    <circle cx="58" cy="206" r="2.5" />
                    <circle cx="162" cy="206" r="2.5" />
                    <circle cx="278" cy="206" r="2.5" />
                    <circle cx="382" cy="206" r="2.5" />
                  </g>
                </svg>

                <!-- Destaque inferior -->
                <div
                  class="mt-5 flex items-center justify-between rounded-xl border border-brand/30 bg-brand/[0.06] px-4 py-3.5"
                >
                  <span class="text-sm text-ink">Do desenvolvimento à operação</span>
                  <span class="font-mono text-sm font-semibold text-brand">no ar em 3 meses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hub {
  filter: drop-shadow(0 0 14px rgba(0, 178, 255, 0.35));
}

.flow {
  stroke-dasharray: 5 9;
  animation: flow 1.6s linear infinite;
}

@keyframes flow {
  to {
    stroke-dashoffset: -28;
  }
}

@media (prefers-reduced-motion: reduce) {
  .flow {
    animation: none;
    stroke-dasharray: none;
  }
}
</style>
