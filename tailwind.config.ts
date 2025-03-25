import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-bg': '#fffffe',
        'secondary-bg': '#d1d1e9',
        'primary-text': '#2b2c34',
        'secondary-text': '#94a1b2',
        'button-bg': '#6246ea',
        'button-text': '#fffffe',
        error: '#e45858',
        'primary-bg-dark': '#16161a',
        'secondary-bg-dark': '#242629',
        'primary-text-dark': '#fffffe',
        'secondary-text-dark': '#94a1b2',
        'button-bg-dark': '#7f5af0',
        'button-text-dark': '#fffffe'
      },
      fontFamily: {
        'montserrat-title': ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        button: '0 0 8px #4f46e5, inset 0 0 40px #4f46e5'
      },
      transitionDuration: {
        long: '3s'
      }
    }
  },
  plugins: []
}
export default config
