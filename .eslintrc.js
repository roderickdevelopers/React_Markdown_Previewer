module.exports = {
  env: {
    es2020: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};
