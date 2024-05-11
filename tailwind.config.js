/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: '#4A6CF7'
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
