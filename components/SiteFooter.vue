<script setup lang="ts">
const year = new Date().getFullYear()

const whatsapp =
  'https://wa.me/554791001461?text=Quero%20integrar%20IA%20aos%20meus%20sistemas'

const columns = [
  {
    title: 'Soluções',
    links: [
      { label: 'Sistemas sob medida', href: '#solucoes' },
      { label: 'Atendimento com IA', href: '#solucoes' },
      { label: 'Dashboards inteligentes', href: '#solucoes' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nós', href: '#sobre' },
      { label: 'Contato', href: whatsapp, external: true },
      { label: 'Privacidade', href: '#' }
    ]
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de Ajuda', href: whatsapp, external: true },
      { label: 'Documentação', href: '#' },
      { label: 'Status do Sistema', href: '#' }
    ]
  }
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/easyia-log',
    icon: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4z'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/easyia_/',
    icon: 'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 01-1.38-.9 3.8 3.8 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 4.6a5.2 5.2 0 100 10.4 5.2 5.2 0 000-10.4zm0 8.58a3.38 3.38 0 110-6.76 3.38 3.38 0 010 6.76zm6.62-8.79a1.22 1.22 0 11-2.44 0 1.22 1.22 0 012.44 0z'
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/554791001461',
    icon: 'M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.2-.9-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.5c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.3.1.7-.1 1.3z'
  }
]
</script>

<template>
  <footer class="relative border-t border-hair bg-surface-soft/50">
    <div class="container-px py-14">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Marca -->
        <div class="lg:pr-6">
          <a href="#inicio" class="flex items-center" aria-label="EasyIA, página inicial">
            <img src="/logo.png" alt="EasyIA" class="h-9 w-auto" />
          </a>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Sistemas sob medida com IA integrada para operações que precisam escalar.
          </p>

          <div class="mt-6 flex items-center gap-3">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener"
              :aria-label="s.label"
              class="flex h-10 w-10 items-center justify-center rounded-lg border border-hair bg-white/[0.02] text-muted transition-all duration-300 hover:border-brand/50 hover:text-brand hover:shadow-glow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path :d="s.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Colunas de links -->
        <div v-for="col in columns" :key="col.title">
          <h3 class="mb-4 font-sans text-sm font-semibold text-ink">{{ col.title }}</h3>
          <ul class="space-y-3">
            <li v-for="l in col.links" :key="l.label">
              <a
                :href="l.href"
                :target="l.external ? '_blank' : undefined"
                :rel="l.external ? 'noopener' : undefined"
                class="text-sm text-muted transition-colors hover:text-brand"
              >
                {{ l.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="my-10 neon-divider" />

      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-xs text-muted/70">
          © {{ year }} EasyIA. Todos os direitos reservados.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-xs text-muted/70 transition-colors hover:text-brand">Termos de Uso</a>
          <a href="#" class="text-xs text-muted/70 transition-colors hover:text-brand">Política de Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
</template>
