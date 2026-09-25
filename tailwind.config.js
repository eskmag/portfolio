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
        // Warm paper ground
        paper: {
          DEFAULT: '#F2EFE8',
          dark: '#121216',
        },
        // Raised surfaces: cards, the project viewer
        card: {
          DEFAULT: '#FBFAF6',
          dark: '#1B1B21',
        },
        ink: {
          DEFAULT: '#16161A',
          dark: '#ECEAE3',
        },
        soft: {
          DEFAULT: '#4A4944',
          dark: '#C3C0B8',
        },
        muted: {
          DEFAULT: '#6F6C64',
          dark: '#96938B',
        },
        rule: {
          DEFAULT: '#D9D4C8',
          dark: '#2C2C33',
        },
        // Ultramarine: the "ink" of annotations, links, active states
        accent: {
          DEFAULT: '#2B3BD6',
          dark: '#8F9BFF',
          tint: '#E4E6F7',
          'tint-dark': '#1C1E33',
        },
        // Vermilion: small marks only (dots, the HEAD commit, arrows)
        mark: {
          DEFAULT: '#E4572E',
          dark: '#FF7F59',
          tint: '#F9DCD0',
          'tint-dark': '#3A2119',
          text: '#A83A18',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      maxWidth: {
        prose: '62ch',
        page: '80rem',
      },
      boxShadow: {
        // Hard offset shadow for the project viewer
        block: '8px 8px 0 0 currentColor',
        // Soft lift for pinned desk cards
        pin: '0 18px 30px -18px rgba(22, 22, 26, 0.35)',
      },
    },
  },
  plugins: [],
}
