module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google', 'plugin:react/jsx-runtime', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'require-jsdoc': 'off',
    'no-unused-vars': 'warn',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
