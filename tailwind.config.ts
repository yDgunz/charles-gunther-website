import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/designs/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Rustic color palette (current design)
        bark: {
          50: '#f5f0eb',
          100: '#e6dcd2',
          200: '#d4c4b4',
          300: '#b89d82',
          400: '#9a7a5c',
          500: '#7d5d42',
          600: '#654a35',
          700: '#503a2a',
          800: '#3d2c20',
          900: '#2c1f17',
          950: '#1a120d',
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
        // Gallery design: warm greys on near-white
        ink: {
          50: '#f7f6f3',
          100: '#eeece7',
          200: '#dcd8d0',
          300: '#bdb7ac',
          400: '#948c7f',
          500: '#6f6759',
          600: '#554e43',
          700: '#403a32',
          800: '#2b2722',
          900: '#1c1916',
        },
        // Field Guide design: aged paper and a green-black ink
        paper: {
          50: '#faf6ec',
          100: '#f4ecd8',
          200: '#eadcbd',
          300: '#dcc79a',
          400: '#c7ab72',
          500: '#a98b50',
        },
        moss: {
          600: '#4a5a3c',
          700: '#3a4730',
          800: '#2b3424',
          900: '#1d2318',
        },
        rust: {
          600: '#a4502a',
          700: '#86401f',
        },
        // Studio design: charcoal with a brass accent
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
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
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
