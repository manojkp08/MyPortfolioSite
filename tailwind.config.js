module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Oldenburg',
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
      xsm: '400px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#0030a1',
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
