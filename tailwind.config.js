/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#F2F8FD',
        'black': '#222326',
        'white': '#FFFFFF',
        'gray': {
          100: '#858585',
          200: '#C8C8CF',
          300: '#D7D9DF'
        },
        'blue': {
          100: '#CCE0ff33',
          200: '#2875A8',
        },
        'purple': {
          100: '#EEE4F2',
          200: '#6F1CA6',
        },
        'success':{
          100: '#16C152',
          200: '#EEFDF6',
        },
        'error': {
          100: '#F3415E',
          200: '#FFF1F2',
        },
      },
      screens: {
        'mobile-sm': '320px',
        'mobile-md': '380px',
        'mobile-lg': '420px',
        'tablet-sm': '640px',
        'tablet-md': '728px',
        'tablet-lg': '840px',
        'desktop-sm': '1024px',
        'desktop-md': '1320px',
        'desktop-lg': '1480px',
      },
      maxWidth: {
        '1320': '1320px'
      },
      fontSize: {
        sm: '0.8rem',
        md: '1rem',
        lg: '1.2rem',
        xl: '1.4rem',
        '2xl': '1.6rem',
        '3xl': '1.8rem',
        '4xl': '2.2rem',
        '5xl': '2.4rem',
        '6xl': '2.6rem',
        '7xl': '2.8rem',
        '8xl': '3rem'
      },
    },
  },
  plugins: [],
};
