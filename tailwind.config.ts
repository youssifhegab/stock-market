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
      boxShadow: {
        base: '0px 4px 40px 0px rgba(9, 14, 45, 0.05)',
        'input-focus':
          '0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #008CB366',
        'input-focus-error':
          '0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #008CB366',
      },
    },
  },
  plugins: [],
} satisfies Config;
