module.exports = {
  // purge: ['./pages/**/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': 'Rubik',
      'body': 'Rubik',
    },
    extend: {
      colors: {
        pro: {
          'red' : '#D4145A',
          'darkorange': '#FBB03B',
          'orange': '#FB872B',
          'lightorange': '#D9E021',
          'lightblue': '#37A0F6',
          'blue': '#387EE9',
          'green': '#00A8C5',
          'spring': '#FFFF7E',
          'pink': '#E7077A',
          'gray': '#7B8FA5',
          'darkgray': '#364658',
          'lightgray': '#A5BAD0',
          'white': '#DEE5ED',
          'background': '#387EE9',
          'scroll': '#C4C4C4'
        }
      },
      spacing: {
        '15': '3.75rem',
        '23': '5.625rem',
        '25': '6.25rem',
        '75': '18.75rem',
        '104': '26rem'
      },
      boxShadow: {
        pro: '0px 5px 10px rgba(0, 0, 0, 0.15)',
        light: '0px 2px 2px rgba(0, 0, 0, 0.15)',
        right: '3px 0px 10px rgba(123, 143, 165, 0.20)',
      },
      transitionProperty: {
        'width':'width',
      },
      fontSize: {
        'xss': '0.625rem',
        'xxss': '0.5625rem'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
