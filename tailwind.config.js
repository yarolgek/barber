/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee var(--duration) linear infinite',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pop-up': 'popUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'spin-in': 'spinIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.8) rotate(-5deg)'
          },
          to: {
            opacity: '1',
            transform: 'scale(1) rotate(0)'
          }
        },
        popUp: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.6)'
          },
          '70%': {
            transform: 'scale(1.1)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        spinIn: {
          from: {
            opacity: '0',
            transform: 'rotate(-180deg) scale(0.7)'
          },
          to: {
            opacity: '1',
            transform: 'rotate(0) scale(1)'
          }
        }
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};