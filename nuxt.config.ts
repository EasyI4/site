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
      title: 'EASYIA | Sistemas sob medida com IA integrada',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A EASYIA desenvolve sistemas sob medida com IA integrada para operações que precisam escalar: automação de processos, integração de dados, dashboards e sustentação contínua.'
        },
        { name: 'author', content: 'EASYIA' },
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'EASYIA, inteligência artificial, sistemas sob medida, automação de processos, integração de dados, dashboards, software enterprise' },
        { name: 'theme-color', content: '#06111F' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:site_name', content: 'EASYIA' },
        { property: 'og:title', content: 'EASYIA | Sistemas sob medida com IA integrada' },
        {
          property: 'og:description',
          content:
            'Sistemas sob medida com IA integrada: automação, integração com CRM, ERP, APIs e dados, dashboards e sustentação para escalar a operação.'
        },
        { property: 'og:image', content: 'https://i.ibb.co/Dgfn13g9/easyia.png' },
        { property: 'og:image:alt', content: 'Logo da EASYIA' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'EASYIA | Sistemas sob medida com IA integrada' },
        {
          name: 'twitter:description',
          content:
            'A EASYIA desenvolve sistemas sob medida com IA integrada para operações que precisam escalar.'
        },
        { name: 'twitter:image', content: 'https://i.ibb.co/Dgfn13g9/easyia.png' },
        { name: 'twitter:image:alt', content: 'Logo da EASYIA' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  }
})
