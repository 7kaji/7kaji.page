module.exports = {
  future: 'all',
  experimental: 'all',
  purge: {
    mode: 'all',
    content: [
      './pages/**/*.tsx',
      './components/**/*.tsx'
    ],
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
};
