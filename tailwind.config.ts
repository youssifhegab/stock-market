import type { Config } from 'tailwindcss';

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        primary: '#008CB3',
        secondary: '#0679A1',
        tertiary: '#F5F5FA',
        grey: '#707070',
      },
    },
  },
  plugins: [],
} satisfies Config;
