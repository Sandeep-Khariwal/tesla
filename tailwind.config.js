/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width:{
        '50':"12.3rem",
        '95':"95%"
      },
      height:{
        '30':"7.5rem"
      },
      margin:{
        'm1':"1rem",
        'm2':"2rem",
        'm2':"3rem",
      },
      textColor: {
        'custom-gray': '#8e8e8e',
      },
      fontSize: {
        'custom-xs': '12px',
        'custom-sm': '0.875rem',
        'custom-base': '1rem',
      },
      letterSpacing: {
        'custom-tight': '1.8px',
        'custom-normal': '0em',
        'custom-wide': '0.05em'
      },
      screens: {
        'small': '400px',
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
}

