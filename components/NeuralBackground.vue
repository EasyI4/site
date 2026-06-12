<script setup lang="ts">
interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

const props = withDefaults(defineProps<{ density?: number }>(), { density: 17000 })

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let raf = 0
let nodes: Node[] = []
let w = 0
let h = 0
let dpr = 1
let running = false
let reduce = false
const mouse = { x: -9999, y: -9999 }

let io: IntersectionObserver | null = null

function buildNodes() {
  const count = Math.min(48, Math.max(14, Math.floor((w * h) / props.density)))
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.32,
    vy: (Math.random() - 0.5) * 0.32
  }))
}

function resize() {
  const el = canvas.value
  if (!el || !ctx || !el.parentElement) return
  const rect = el.parentElement.getBoundingClientRect()
  w = rect.width
  h = rect.height
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  el.width = Math.floor(w * dpr)
  el.height = Math.floor(h * dpr)
  el.style.width = `${w}px`
  el.style.height = `${h}px`
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  buildNodes()
  if (reduce) render(false)
}

function render(animate: boolean) {
  if (!ctx) return
  ctx.clearRect(0, 0, w, h)
  const maxDist = 132
  const mouseDist = 170

  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i]
    if (animate) {
      n.x += n.vx
      n.y += n.vy
      if (n.x <= 0 || n.x >= w) n.vx *= -1
      if (n.y <= 0 || n.y >= h) n.vy *= -1
    }

    for (let j = i + 1; j < nodes.length; j++) {
      const m = nodes[j]
      const dx = n.x - m.x
      const dy = n.y - m.y
      const dist = Math.hypot(dx, dy)
      if (dist < maxDist) {
        const a = (1 - dist / maxDist) * 0.18
        ctx.strokeStyle = `rgba(0, 178, 255, ${a})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(n.x, n.y)
        ctx.lineTo(m.x, m.y)
        ctx.stroke()
      }
    }

    const mdx = n.x - mouse.x
    const mdy = n.y - mouse.y
    const md = Math.hypot(mdx, mdy)
    if (md < mouseDist) {
      const a = (1 - md / mouseDist) * 0.38
      ctx.strokeStyle = `rgba(0, 178, 255, ${a})`
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(n.x, n.y)
      ctx.lineTo(mouse.x, mouse.y)
      ctx.stroke()
    }

    ctx.fillStyle = 'rgba(0, 178, 255, 0.5)'
    ctx.beginPath()
    ctx.arc(n.x, n.y, 1.3, 0, Math.PI * 2)
    ctx.fill()
  }
}

function loop() {
  render(true)
  raf = requestAnimationFrame(loop)
}

function start() {
  if (running || reduce) return
  running = true
  loop()
}

function stop() {
  running = false
  cancelAnimationFrame(raf)
}

function onMouse(e: MouseEvent) {
  const el = canvas.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
}

function onLeave() {
  mouse.x = -9999
  mouse.y = -9999
}

onMounted(() => {
  const el = canvas.value
  if (!el) return
  ctx = el.getContext('2d')
  reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  resize()

  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', onMouse, { passive: true })
  window.addEventListener('mouseout', onLeave)

  if (reduce) {
    render(false)
    return
  }

  // Pausa a animação quando o hero sai da tela.
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? start() : stop()))
    },
    { threshold: 0 }
  )
  io.observe(el)
  start()
})

onBeforeUnmount(() => {
  stop()
  io?.disconnect()
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', onMouse)
  window.removeEventListener('mouseout', onLeave)
})
</script>

<template>
  <canvas
    ref="canvas"
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 -z-10 h-full w-full"
  />
</template>
