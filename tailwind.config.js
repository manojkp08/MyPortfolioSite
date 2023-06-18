module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Fjalla One',
      tertiary: 'Fredericka the Great',
      alternative: 'Orbitron'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#f9ffb3',
        accent: '#ead200',
        // accent: '#f9ffb3'
      },
      backgroundImage: {
        site: "url('./assets/site-bg.png')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
        copyright: "url('./assets/copyright-bg.png')"
      },
    },
  },
  plugins: [],
};
