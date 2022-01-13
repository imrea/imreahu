module.exports = {
  content: ['./{pages,atoms,molecules}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display:
          '"Amatic SC", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      colors: {
        hearts: '#bd1550',
        cocktail: '#e97f02',
        euphoria: '#f8ca00',
        balloon: '#8a9b0f',
        pacifica: '#4ecdc4',
      },
      boxShadow: {
        card: '0px 5px 25px 0px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
