/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Default theme (Dark)
        'primary': {
          DEFAULT: '#333333',
          'light': '#4a4a4a',
          'dark': '#1a1a1a',
        },
        'secondary': {
          DEFAULT: '#0096c7',
          'light': '#48cae4',
          'dark': '#023e8a',
        },
        'accent': {
          DEFAULT: '#ffffff',
          'light': '#f8f9fa',
          'dark': '#e9ecef',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};