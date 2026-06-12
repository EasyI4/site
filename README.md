# EasyIA — Landing page

Landing page one-page da **EasyIA**, fábrica de software focada em sistemas sob medida, integrações, automações e IA aplicada a operações críticas.

Construída com **Nuxt 3** + **Tailwind CSS**, com estética dark/enterprise, grid técnico, destaques em verde neon e componentes reutilizáveis.

## Stack

- [Nuxt 3](https://nuxt.com) (Vue 3, SSR/Nitro)
- [Tailwind CSS](https://tailwindcss.com) via `@nuxtjs/tailwindcss`
- Fontes: Space Grotesk + JetBrains Mono

## Estrutura

```
app.vue                 # composição da página
error.vue               # página de erro (404)
components/
  SiteHeader.vue        # header fixo com blur ao rolar
  HeroSection.vue       # dobra inicial + grid + glow + barras diagonais
  MetricsBar.vue        # faixa de métricas operacionais
  ProcessSection.vue    # "Como trabalhamos" (4 etapas)
  ClientsSection.vue    # clientes e operações reais
  StackSection.vue      # stack & infraestrutura (badges)
  ServicesSection.vue   # o que construímos
  CaseStudySection.vue  # case principal + depoimento
  TeamSection.vue       # equipe
  FinalCTA.vue          # CTA final (WhatsApp / E-mail)
  SiteFooter.vue        # rodapé
plugins/reveal.client.ts # animação de revelação no scroll
assets/css/tailwind.css  # base, componentes e utilidades
tailwind.config.js       # paleta, fontes, glow e animações
```

## Desenvolvimento

```bash
npm install
npm run dev
```

App em `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Heroku

O projeto está pronto para Heroku (Node + Nitro):

- `Procfile`: `web: node .output/server/index.mjs`
- `heroku-postbuild`: roda `nuxt build` automaticamente no deploy
- O servidor Nitro respeita a variável `PORT` da Heroku

Passos:

```bash
heroku login
heroku create NOME-DO-SEU-APP
heroku buildpacks:set heroku/nodejs
git add .
git commit -m "Deploy EasyIA landing (Nuxt)"
git push heroku main
```

> Se a branch principal for `master`, use `git push heroku master`.

## Personalização rápida

- Cores e glow: `tailwind.config.js`
- Contatos (WhatsApp/e-mail): `components/FinalCTA.vue` e `components/SiteFooter.vue`
- SEO e metatags: `nuxt.config.ts`
