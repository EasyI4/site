// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  nitro: {
    preset: 'node-server'
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js'
  },
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'EasyIA | Sistemas sob medida com IA integrada',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A EasyIA desenvolve sistemas sob medida com IA integrada para operações que precisam escalar: automação de processos, integração de dados, dashboards e sustentação contínua.'
        },
        { name: 'theme-color', content: '#06111F' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'EasyIA | Sistemas sob medida com IA integrada' },
        {
          property: 'og:description',
          content:
            'Sistemas sob medida com IA integrada: automação, integração com CRM, ERP, APIs e dados, dashboards e sustentação para escalar a operação.'
        },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  }
})
