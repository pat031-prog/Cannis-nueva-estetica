/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cannis-green': '#1B7E44',
        'cannis-teal': '#008C99',
        'cannis-dark': '#1A1A1A',
        'cannis-light': '#F8F9FA',
      },
      fontFamily: {
        'agrandir': ['Agrandir', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'tactical': '0 2px 8px rgba(27, 126, 68, 0.08)',
        'tactical-hover': '0 8px 24px rgba(27, 126, 68, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
