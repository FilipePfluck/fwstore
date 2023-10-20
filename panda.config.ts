import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          background: {
            value: '#0A0A0A',
          },
          foreground: {
            value: '#FFFFFF',
          },
          foregroundSubtle: {
            value: '#EBEBEB',
          },
          card: {
            value: '#0A0A0A',
          },
          cardForeground: {
            value: '#FFFFFF',
          },
          popover: {
            value: '#0A0A0A',
          },
          popoverForeground: {
            value: '#FFFFFF',
          },
          primary: {
            value: '#41327A',
          },
          primaryForeground: {
            value: '#FFFFFF',
          },
          secondary: {
            value: '#171717',
          },
          secondaryHover: {
            value: '#191919',
          },
          secondaryForeground: {
            value: '#FFFFFF',
          },
          muted: {
            value: '#171717',
          },
          mutedForeground: {
            value: '#96A2A5',
          },
          accent: {
            value: '#171717',
          },
          accentForeground: {
            value: '#FFFFFF',
          },
          destructive: {
            value: '#371515',
          },
          destructiveForeground: {
            value: '#FFFFFF',
          },
          border: {
            value: '#2A2A2A',
          },
          input: {
            value: '#171717',
          },
          ring: {
            value: '#9DD6D6',
          },
        },
        animations: {
          drawerSlideIn: { value: 'drawerSlideIn 0.3s ease-out' },
          drawerSlideOut: { value: 'drawerSlideOut 0.3s ease-in' },
        },
      },
      keyframes: {
        drawerSlideIn: {
          '0%': { transform: 'translateX(-80vw)' },
          '100%': { transform: 'translateX(0px)' },
        },
        drawerSlideOut: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-80vw)' },
        },
      },
    },
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
})
