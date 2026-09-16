/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0704',
        midnight: '#130B07',
        space: '#1A0F09',
        espresso: '#0B0704',
        roast: '#130B07',
        cocoa: '#1A0F09',
        surface: {
          900: '#140C07',
          800: '#21130B',
          700: '#2E1B10',
        },
        gold: {
          light: '#FDF2D6',
          DEFAULT: '#D99B38',
          warm: '#E8B24A',
          dark: '#9C6C1B',
        },
        sunset: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          orange: '#EA580C',
          rust: '#9A3412',
        },
        apple: {
          card: 'rgba(32, 19, 12, 0.72)',
          cardHover: 'rgba(45, 27, 16, 0.85)',
          border: 'rgba(245, 158, 11, 0.18)',
        }
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '34px',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Inter"', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
};
