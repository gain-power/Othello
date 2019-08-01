module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: [
    // stylelint plugin to sort CSS rules content with specified order
    // https://github.com/hudochenkov/stylelint-order
    'stylelint-order',
  ],
  ignoreFiles: [
    '**/node_modules/**',
  ],
};