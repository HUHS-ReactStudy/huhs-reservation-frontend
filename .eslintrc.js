module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': [`error`, `windows`],
  },
};