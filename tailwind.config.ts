import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        gelatoLuxe: ['var(--font-gelatoLuxe)', 'sans-serif'],

      },
      screens: {
        mobileScreen: { max: '768px' },
        lg: '1025px',
        '3xl': '1681px'
      },
    },
  },
}
export default config
