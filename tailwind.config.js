module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      serif: ['Inter'],
      serif2: ['Montserrat'],
      display: ['Righteous'],
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semi: 600,
      bold: 700,
      black: 900,
    },
    extend: {
      colors: {
        white: {
          100: '#fcffff',
        },
        black: {
          100: '#051821',
        },
        primary: {
          100: '#266867',
        },
        secondary: {
          100: '#f58800',
        },
        tertiary: {
          100: '#1a4645',
        },
        quaternary: {
          100: '#f8bc24',
        },
        logoColor: {
          100: '#f8bc24',
        },
      },
      strokeWidth: {
        2: '.5px',
      },
      spacing: {
        4: '10px',
      },
    },
  },
  plugins: [require('tailwindcss-text-fill-stroke')()],
};
