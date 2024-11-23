const config = {
  ...require('@vercel/style-guide/prettier'),
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;
