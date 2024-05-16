/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '350px',
        md: '768px',
        lg: '992px',
        // xl: '1440px',
      },
      colors: {
        'blue': '#0404A6B4',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        "blue-range": {
          100: "#2933E6",
          200: "#020DE0",
        },
        "title-color": "#333333",
        "title-color-dark": "#000000",
        "text-color": "#767676",
        "body-color": "#F9F9F9",
        "container-color": "#FFFFFF",
      },

      boxShadow: {
        sm: '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
        lg: '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',
      },

      fontSize: {
        xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
        sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
        md: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
        lg: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
        xl: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
        "2xl": ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
        "3xl": ['48px', { lineHeight: '56px', letterSpacing: '-0.03em' }],
        "4xl": ['56px', { lineHeight: '64px', letterSpacing: '-0.03em' }],
        "5xl": ['80px', { lineHeight: '80px', letterSpacing: '-0.03em' }],
        "big-font-size": "3rem",
        "h1-font-size": "2.25rem",
        "h2-font-size": "1.5rem",
        "h3-font-size": "1.25rem",
        "normal-font-size": "1rem",
        "small-font-size": "0.875rem",
        "smaller-font-size": "0.813rem",
        "tiny-font-size": "0.625rem",
      },

      fontWeight: {
        "font-normal": "400",
        "font-medium": "500",
        "font-semi-bold": "600",
      },

      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      margin: {
        "mb-0-25": "0.25rem",
        "mb-0-5": "0.5rem",
        "mb-0-75": "0.75rem",
        "mb-1": "1rem",
        "mb-1-5": "1.5rem",
        "mb-2": "2rem",
        "mb-2-5": "2.5rem",
        "mb-3": "3rem",
      },
      zIndex: {
        "z-tooltip": "10",
        "z-fixed": "100",
        "z-modal": "1000",
      },

      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [],
}

