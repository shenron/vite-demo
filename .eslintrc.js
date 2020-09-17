const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      alias: {
        map: [
          ['/@', path.resolve(__dirname, './src')],
        ],
        extensions: ['.ts', 'tsx', 'png', '.css', '.scss'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'never',
    }],
    'func-names': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^(_|h)' }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^(_|h)' }],
    'import/prefer-default-export': 0,
    'import/no-absolute-path': 0,
  },
};
