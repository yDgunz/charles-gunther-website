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
        // Rustic color palette
        bark: {
          50: '#faf6f3',
          100: '#f0e8e0',
          200: '#e0d0c0',
          300: '#c9b199',
          400: '#b08f70',
          500: '#9a7555',
          600: '#846248',
          700: '#6b4f3c',
          800: '#594235',
          900: '#4c392f',
          950: '#2a1e18',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e3e7dd',
          200: '#c7cfbc',
          300: '#a4b194',
          400: '#819172',
          500: '#647556',
          600: '#4e5c43',
          700: '#3f4937',
          800: '#353d2f',
          900: '#2d3428',
          950: '#181c15',
        },
        cream: {
          50: '#fdfcf9',
          100: '#f9f6ed',
          200: '#f2ebd8',
          300: '#e8dabb',
          400: '#dcc49a',
          500: '#d0ad7d',
          600: '#c19564',
          700: '#a17a50',
          800: '#836445',
          900: '#6c533b',
          950: '#3a2b1e',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
