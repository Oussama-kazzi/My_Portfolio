/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#22d3ee', // Cyan-400
        neonPurple: '#a855f7', // Purple-500
        darkBg: '#050505', // Very dark
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // For the Legal Firm project feel
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/hero_background.png')",
      }
    },
  },
  plugins: [],
}
