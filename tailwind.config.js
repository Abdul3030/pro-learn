module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': '"Rubik"',
      'body': '"Rubik"',
    },
    extend: {
      colors: {
        pro: {
          'red' : '#D4145A',
          'orange': '#FBB03B',
          'lightblue': '#37A0F6',
          'blue': '#387EE9',
          'green': '#FFFF7E',
          'spring': '#00A8C5',
          'pink': '#E7077A'
        }
      },
      spacing: {
        '23': '5.625rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
