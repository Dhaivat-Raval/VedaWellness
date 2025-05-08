/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fdf4fa',
          100: '#fbe8f5',
          200: '#f8d1eb',
          300: '#f4aada',
          400: '#ed74c3',
          500: '#D291BC', // soft orchid
          600: '#BA55D3', // medium orchid
          700: '#800080', // deep purple accent
          800: '#702963',
          900: '#621c4d',
          950: '#3f0a2e',
        },
        secondary: {
          50:  '#fff8fb',
          100: '#ffeef6',
          200: '#ffdaea', // very light pink
          300: '#ffbfd3',
          400: '#ff9eb8',
          500: '#FFC0CB', // light pink (soft)
          600: '#FFAED1', // slightly warmer pink
          700: '#F28EB9', // muted rose
          800: '#D97AA1',
          900: '#B95E83',
          950: '#8F3E60',
        },
        neutral: {
          50:  '#F5F5F5',
          100: '#E6E6E6',
          200: '#CCCCCC',
          300: '#B3B3B3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
          950: '#0D0D0D',
        },
      },
      fontFamily: {
        sans:    ['Poppins',     'system-ui', 'sans-serif'],
        display: ['Montserrat',  'serif'],
        body:    ['Open Sans',   'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in':  'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',     opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
