// Lightweight scroll-reveal directive using IntersectionObserver.
// SSR-safe: getSSRProps returns no props; the IntersectionObserver runs only on the client.
// Usage: <div v-reveal> or <div v-reveal="150"> (delay in ms)
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add('is-revealed')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal')
      if (binding.value) {
        el.style.transitionDelay = `${binding.value}ms`
      }
      observer?.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    }
  })
})
