module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: ['Rubik', 'sans-serif']
      }
    },
    rotate: {
      '45': '45deg',
      '-45': '-45deg'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-transforms')({
      //
    })
  ]
}
