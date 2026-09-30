/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'taupe-dark': 'rgb(var(--color-taupe-dark-rgb) / <alpha-value>)',
        'taupe-main': 'rgb(var(--color-taupe-main-rgb) / <alpha-value>)',
        'taupe-medium': 'rgb(var(--color-taupe-medium-rgb) / <alpha-value>)',
        'taupe-light': 'rgb(var(--color-taupe-light-rgb) / <alpha-value>)',
        'taupe-bg': 'rgb(var(--color-taupe-bg-rgb) / <alpha-value>)',
        'taupe-surface': 'rgb(var(--color-taupe-surface-rgb) / <alpha-value>)',
        'taupe-card': 'rgb(var(--color-taupe-card-rgb) / <alpha-value>)',
        'accent-gold': 'rgb(var(--color-accent-gold-rgb) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
