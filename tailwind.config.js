/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        fancy: ['DM Serif Display', 'serif'],
      },
      fontSize: {
        h1: ["clamp(2.5rem, 5vw, 3.75rem)", { lineHeight: "1.2" }],
        h2: ["2rem", { lineHeight: "1.3" }],     // 32px 
        base: ["1rem", { lineHeight: "1.6" }],   // 16px
        sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
      },

      animation: {
        'fade-in': 'fadeIn 1.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
