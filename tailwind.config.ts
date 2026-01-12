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
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
