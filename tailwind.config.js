/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-black': '#141414',
        'netflix-dark': '#181818',
        'netflix-red': '#E50914',
        'netflix-red-dark': '#B81D13',
        'netflix-gray': '#333333',
        'netflix-gray-light': '#666666',
        'netflix-white': '#FFFFFF',
        'netflix-text': '#E5E5E5',
        'netflix-text-dark': '#B3B3B3',
        'netflix-bg': '#000000',
        'netflix-card-bg': '#2F2F2F',
      },
      fontFamily: {
        'netflix': ['Netflix Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'netflix-sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'netflix-gradient': 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
        'netflix-hero-gradient': 'linear-gradient(77deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.8) 100%)',
      },
      boxShadow: {
        'netflix': '0 2px 4px rgba(0,0,0,0.3)',
        'netflix-lg': '0 4px 8px rgba(0,0,0,0.4)',
        'netflix-glow': '0 0 20px rgba(229,9,20,0.3)',
      },
      animation: {
        'netflix-bounce': 'bounce 0.6s ease-in-out',
        'netflix-fade': 'fadeIn 0.5s ease-in-out',
        'netflix-slide': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
