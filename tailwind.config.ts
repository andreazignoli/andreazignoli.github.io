import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        accent: '#00dc82',
        secondary: '#155799',
        glass: 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'cell-ripple': 'cellRipple 300ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        cellRipple: {
          '0%':   { opacity: '0.15' },
          '40%':  { opacity: '0.7', backgroundColor: 'rgba(0,220,130,0.18)' },
          '100%': { opacity: '0.15', backgroundColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}

export default config
