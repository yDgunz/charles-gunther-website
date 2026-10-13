import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Charcoal with a brass accent
        coal: {
          950: '#0c0b0a',
          900: '#141211',
          800: '#1f1c1a',
          700: '#2c2825',
          600: '#3d3733',
          400: '#78706a',
          300: '#a39a92',
          200: '#cfc7bf',
          100: '#ece7e1',
        },
        brass: {
          300: '#e4c585',
          400: '#d4ad5f',
          500: '#bb9345',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
export default config
