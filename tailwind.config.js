module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
       'body': ['Graphik'],
      },

      container: {
        center: true,
        padding: '15px',
        
        screens: {
          lg: "1120px"
        }
      },

      width: {
         '1/70': '70%',
         '1/30': '30%',
       },

       minHeight: {
         '500' : '512px',
       },

      colors: {
        black:{
          '900': '#202327',
          '800': '#272A30',
          '700': '#2E3238',
        },

        gray:{
          '900' : '#5C6470',
          '800' : '#9FA2A8',
          
        },
        yellow:{
          '900' : '#FFC008',
        },
      }
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    mode : 'layers',
    content: ['public/*.html', 'public/*.js'],
  }
}
