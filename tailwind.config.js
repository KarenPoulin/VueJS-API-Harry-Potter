/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', 
            './src/**/*.{vue,js,ts,jsx,tsx}',
            "./node_modules/flowbite/**/*.js"
          ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
