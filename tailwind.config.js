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
        paper: {
          DEFAULT: '#FAFAF7',
          dark: '#111110',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          dark: '#EDEBE5',
        },
        muted: {
          DEFAULT: '#6B6B66',
          dark: '#8A8880',
        },
        rule: {
          DEFAULT: '#E6E4DD',
          dark: '#262624',
        },
        accent: {
          DEFAULT: '#B5442A',
          dark: '#E07A5F',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        prose: '62ch',
      },
    },
  },
  plugins: [],
}
