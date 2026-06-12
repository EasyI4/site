<script setup lang="ts">
const apps = [
  {
    title: 'Mobile',
    description:
      'A operação de campo na mão. Apps integrados aos seus dados, com IA onde importa.',
    bullets: [
      'Formulários e rotinas operacionais',
      'Integração com APIs e autenticação',
      'Alertas e ações automatizadas'
    ],
    icon: 'M7 4h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1zm4 14h2'
  },
  {
    title: 'Desktop',
    description:
      'Backoffice mais rápido. Ferramentas internas que conferem, analisam e executam por você.',
    bullets: [
      'Painéis e ferramentas internas',
      'Integração com ERP/CRM',
      'Automação assistida e auditoria'
    ],
    icon: 'M3 5h18v11H3zM8 20h8M12 16v4'
  },
  {
    title: 'Web',
    description:
      'Portais e sistemas que aguentam o crescimento. IA, performance e rastreabilidade.',
    bullets: [
      'Portais, dashboards e áreas logadas',
      'Integrações com APIs e bancos',
      'Observabilidade e métricas'
    ],
    icon: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z'
  }
]
</script>

<template>
  <section id="aplicacoes" class="relative py-24 lg:py-32">
    <div class="container-px">
      <div class="mb-14 flex flex-col items-center gap-5" v-reveal>
        <SectionBadge label="Aplicações" />
        <SectionTitle
          subtitle="Da linha de frente ao backoffice. Sistemas integrados, prontos para escalar."
        >
          Mobile, Desktop e Web com <span class="text-brand">IA integrada</span>
        </SectionTitle>
      </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div v-for="(a, i) in apps" :key="a.title" v-reveal="i * 90" class="h-full">
          <ApplicationCard
            :title="a.title"
            :description="a.description"
            :bullets="a.bullets"
            :icon="a.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>
