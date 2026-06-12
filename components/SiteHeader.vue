<script setup lang="ts">
const scrolled = ref(false)
const open = ref(false)

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Aplicações', href: '#aplicacoes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Processo', href: '#processo' }
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'border-b border-hair bg-surface/80 backdrop-blur-xl'
      : 'border-b border-transparent bg-transparent'"
  >
    <div class="container-px flex h-16 items-center justify-between lg:h-20">
      <!-- Logo -->
      <a href="#inicio" class="flex items-center" aria-label="EasyIA, página inicial">
        <img src="/logo.png" alt="EasyIA" class="h-8 w-auto lg:h-9" />
      </a>

      <!-- Menu -->
      <nav class="hidden items-center gap-8 lg:flex">
        <a
          v-for="l in links"
          :key="l.href"
          :href="l.href"
          class="text-sm font-medium tracking-wide text-muted transition-colors hover:text-ink"
        >
          {{ l.label }}
        </a>
      </nav>

      <!-- CTA -->
      <div class="flex items-center gap-3">
        <CTAButton href="#contato" class="hidden px-5 py-2.5 sm:inline-flex">
          Diagnóstico
        </CTAButton>

        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hair text-ink lg:hidden"
          aria-label="Abrir menu"
          @click="open = !open"
        >
          <svg v-if="!open" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="border-b border-hair bg-surface/95 backdrop-blur-xl lg:hidden">
        <nav class="container-px flex flex-col gap-1 py-4">
          <a
            v-for="l in links"
            :key="l.href"
            :href="l.href"
            class="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-ink"
            @click="open = false"
          >
            {{ l.label }}
          </a>
          <CTAButton href="#contato" block class="mt-2" @click="open = false">
            Diagnosticar minha operação
          </CTAButton>
        </nav>
      </div>
    </transition>
  </header>
</template>
