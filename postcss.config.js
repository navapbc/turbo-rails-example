module.exports = {
  parser: 'postcss-scss',
  plugins: {
    '@csstools/postcss-sass': {},
    'postcss-import': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }
  }
}
