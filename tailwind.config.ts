import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, reverent color palette
        fold: {
          cream: '#FAF8F5',
          warmWhite: '#FFFEFB',
          gold: '#C4A962',
          goldMuted: '#D4C48A',
          goldLight: '#F5EED6',
          green: '#2D4739',
          greenLight: '#3D5A4A',
          greenMuted: '#6B8F7A',
          blue: '#4A6B8A',
          blueMuted: '#7A9BB8',
          blueLight: '#E8EFF5',
          stone: '#8B8178',
          stoneDark: '#5C5650',
          stoneLight: '#D4CFC9',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
      spacing: {
        'section': '6rem',
        'section-sm': '4rem',
      },
      maxWidth: {
        'content': '48rem',
        'wide': '64rem',
      }
    },
  },
  plugins: [],
}

export default config
