/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          white: '#ffffff',
          offwhite: '#e8e8e0',
          dim: '#888880',
          yellow: '#D4A017',
          yellowDim: '#8B6D0E',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          hover: 'rgba(255,255,255,0.25)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        pulse: 'vs-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'vs-pulse': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.6)' },
        },
      },
    },
  },
  plugins: [],
}
