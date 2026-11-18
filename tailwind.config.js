/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1F3F', 950: '#050F22', 900: '#07142B', 800: '#0E2850', 700: '#13305E' },
        gold: { DEFAULT: '#E8A90E', light: '#F6D168', deep: '#B8860B' },
        steel: '#2F7FD1',
        sheet: '#EEF1F5',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
