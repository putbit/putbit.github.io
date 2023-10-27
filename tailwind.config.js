const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Noto Sans Mono', 'monospace'],
      },
      colors: {
        primary: {
          light: colors.white,
          dark: colors.black,
        },
        secondary: {
          light: colors.gray[100],
          dark: colors.gray[900],
        },
        'text-primary': {
          light: colors.black,
          dark: colors.white,
        },
        'text-secondary': {
          light: colors.gray[800],
          dark: colors.gray[200],
        },
        'text-tertiary': {
          light: colors.gray[700],
          dark: colors.gray[300],
        },
      },
    },
  },
  plugins: [],
}
