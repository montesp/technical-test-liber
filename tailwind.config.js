/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'background': '#F5F5F7',
        'black': '#222326',
        'white': '#FFFFFF',
        'gray': {
          100: '#858585',
          200: '#C8C8CF'
        },
        'blue': '#2875A8',
        'blue-background': '#CCE0FF33',
        'purple': '#6F1CA6',
        'purple-background': '#EEE4F2',
        'success': '#16c152',
        'success-background':'#16C152',
        'error': '#F3415E',
        'error-background': '#FFF1F2'
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
      }
    },
  },
  plugins: [],
};
