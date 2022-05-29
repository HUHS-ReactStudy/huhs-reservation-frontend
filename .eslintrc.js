module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'require-jsdoc': 'off',
  },
  plugins: ['react'],
  rules: {},
};
