import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f0faf0',
          100: '#d6f5d6',
          200: '#adeead',
          300: '#7ddf7d',
          400: '#4cc94c',
          500: '#2dae2d',
          600: '#1d8c1d',
          700: '#166616',
          800: '#0f4a0f',
          900: '#0a330a',
          950: '#052005',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        forest: {
          900: '#0d2b14',
          800: '#123618',
          700: '#17421e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, #0d2b14 0%, #17421e 50%, #0d2b14 100%)',
      },
    },
  },
  plugins: [],
}
export default config
