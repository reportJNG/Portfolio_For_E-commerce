import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        primary: '#0A0F1E',
        secondary: '#FFFFFF',
        accent: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          glow: '#60A5FA'
        },
        muted: '#94A3B8',
        surface: '#F8FAFC',
        border: '#E2E8F0',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        display: ['var(--font-syne)', ...tailwindcssAnimate.fontFamily.sans],
        sans: ['var(--font-dm-sans)', ...tailwindcssAnimate.fontFamily.sans],
        mono: ['var(--font-jetbrains-mono)', ...tailwindcssAnimate.fontFamily.mono]
      },
      backgroundImage: {
        'walid-gradient': 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 50%, #0EA5E9 100%)',
        'grid-pattern':
          'linear-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.08) 1px, transparent 1px)'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(37, 99, 235, 0.24)',
        'card-glow': '0 18px 60px rgba(37, 99, 235, 0.16)'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 rgba(96, 165, 250, 0)' },
          '50%': { boxShadow: '0 0 42px rgba(96, 165, 250, 0.32)' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.8s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
