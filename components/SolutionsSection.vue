<script setup lang="ts">
const solutions = [
  {
    title: 'Sistemas sob medida',
    description:
      'Plataformas, portais, CRMs e ERPs internos feitos para a sua operação. Nada de software genérico.',
    bullets: ['Arquitetura exclusiva', 'Integração completa', 'Escalável e seguro', 'Suporte dedicado'],
    icon: 'M8 9l-3 3 3 3m8-6l3 3-3 3M13 6l-2 12',
    badge: 'Recomendado',
    featured: true
  },
  {
    title: 'Atendimento com IA',
    description:
      'Triagem, respostas e encaminhamentos automáticos no WhatsApp, site e redes. Menos fila, menos custo.',
    bullets: ['Atendimento 24/7', 'Integração multicanal', 'Registro e rastreabilidade'],
    icon: 'M21 12a8 8 0 01-8 8H7l-4 3V12a8 8 0 018-8h2a8 8 0 018 8zM8 11h.01M12 11h.01M16 11h.01',
    badge: 'Mais Popular'
  },
  {
    title: 'Dashboards inteligentes',
    description:
      'Indicadores em tempo real que avisam antes do problema. Decisão com dados, não achismo.',
    bullets: ['Visão em tempo real', 'Alertas automáticos', 'Visão executiva'],
    icon: 'M4 19V5m0 14h16M8 15v-4m4 4V8m4 7v-6'
  },
  {
    title: 'Automação de rotinas',
    description:
      'Tarefas repetitivas fora da mão do time. Menos custo, menos erro, mais escala.',
    bullets: ['Fluxos automatizados', 'Redução de custos', 'Mais eficiência'],
    icon: 'M12 8V4m0 16v-4m4-4h4M4 12h4m9.66-5.66l-2.83 2.83M9.17 14.83l-2.83 2.83m0-11.32l2.83 2.83m5.66 5.66l2.83 2.83'
  },
  {
    title: 'Integrações e dados',
    description:
      'APIs, bancos de dados, CRM e ERP conectados. Fim das ilhas de informação.',
    bullets: ['Integração de sistemas', 'Dados unificados', 'Decisão com segurança'],
    icon: 'M4 7c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zm0 0v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3'
  },
  {
    title: 'Análise preditiva',
    description:
      'Antecipe a demanda com machine learning. Decida na frente, com base em dados.',
    bullets: ['Previsão de tendências', 'Machine Learning', 'Insights estratégicos'],
    icon: 'M3 17l6-6 4 4 8-8m0 0h-5m5 0v5'
  }
]

</script>

<template>
  <section id="solucoes" class="relative py-24 lg:py-32">
    <div class="container-px">
      <div class="mb-14 flex flex-col items-center gap-5" v-reveal>
        <SectionBadge label="Soluções" />
        <SectionTitle
          subtitle="Sistemas sob medida com IA integrada que se pagam na operação. Menos custo manual, mais velocidade."
        >
          A infraestrutura inteligente da sua <span class="text-brand">operação</span>
        </SectionTitle>
      </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(s, i) in solutions" :key="s.title" v-reveal="(i % 3) * 80" class="h-full">
          <SolutionCard
            :title="s.title"
            :description="s.description"
            :bullets="s.bullets"
            :icon="s.icon"
            :badge="s.badge"
            :featured="s.featured"
          />
        </div>
      </div>
    </div>
  </section>
</template>
