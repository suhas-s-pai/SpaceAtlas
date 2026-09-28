/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020409',
          900: '#050914',
          850: '#091024',
          800: '#0D1630',
          700: '#142247',
          600: '#1D3061',
        },
        cyan: {
          glow: '#00f0ff',
          accent: '#06b6d4',
          dim: 'rgba(6, 182, 212, 0.15)',
        },
        indigo: {
          glow: '#6366f1',
          dim: 'rgba(99, 102, 241, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite',
        'orbit-slow': 'orbit 40s linear infinite',
        'radar-sweep': 'radar 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.15) 0%, rgba(2, 4, 9, 0.95) 70%)',
      }
    },
  },
  plugins: [],
}
