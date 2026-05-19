/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        birthday: {
          dark: '#0a0a0a',
          purple: '#6d28d9',
          gold: '#fbbf24',
          peach: '#ffedd5',
          light: '#fdf4ff',
          bg: '#fdf3f8', // Light pink background
          text: '#ad2b59', // Dark pink/red text
          accent: '#0d7c88', // Teal/blue text
          pink: '#f472b6',
          red: '#ef4444',
          blue: '#3b82f6',
          green: '#22c55e',
          yellow: '#eab308',
          ribbon: '#f3c4b5', // Ribbon background
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'blink': 'blink 2s ease-in-out infinite',
        'blink-slow': 'blink 3s ease-in-out infinite',
        'blink-fast': 'blink 1.5s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))' },
          '50%': { opacity: '0.4', filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.2))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        handwriting: ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}
