import type { Config } from 'tailwindcss'
import { addDynamicIconSelectors } from '@iconify/tailwind'

export default {
  important: true,
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        main: '#5B86E5',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
} satisfies Config
