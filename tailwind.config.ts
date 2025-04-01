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
        'primary-bg': '#FFFDF2',
        'secondary-bg': '#E9F1FA',
        'primary-text': '#2b2c34',
        'secondary-text': '#94a1b2',
        'button-bg': /* '#6246ea'  '#00ABE4' '#01257D' */ '#1D63FF',
        'button-text': '#fffffe',
        error: '#e45858',
        'primary-bg-dark': '#16161a',
        'secondary-bg-dark': '#242629',
        'primary-text-dark': '#fffffe',
        'secondary-text-dark': '#94a1b2',
        'button-bg-dark': /* '#7f5af0' */ '#00FFFF',
        'button-text-dark': /* '#fffffe' */ '#0A1828' /* #178582 #BFA181 */
      },
      fontFamily: {
        'montserrat-title': ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
