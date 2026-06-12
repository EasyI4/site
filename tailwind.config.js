/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#06111F',
          soft: '#071B2A',
          card: 'rgba(15, 35, 55, 0.72)'
        },
        brand: {
          DEFAULT: '#00B2FF',
          cta: '#009FE3'
        },
        ink: '#D7F1FF',
        muted: '#A8B9C8'
      },
      borderColor: {
        hair: 'rgba(0, 178, 255, 0.22)'
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        glow: '0 0 50px rgba(0, 178, 255, 0.22)',
        'glow-sm': '0 0 22px rgba(0, 178, 255, 0.18)',
        card: '0 24px 70px -28px rgba(0, 0, 0, 0.75)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(0,178,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,178,255,0.06) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '52px 52px'
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.85' }
        },
        typing: {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '30%': { transform: 'translateY(-3px)', opacity: '1' }
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        typing: 'typing 1.2s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
