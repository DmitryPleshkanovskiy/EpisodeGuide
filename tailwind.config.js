import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
