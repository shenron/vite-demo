const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'];

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      alias: {
        map: [
          ['@', path.resolve(__dirname, './src')],
        ],
        extensions,
      },
      node: {
        extensions,
      },
    },
  },
  parser: 'vue-eslint-parser',
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
    }],
    'func-names': 0,
    'import/prefer-default-export': 0,
    'import/no-absolute-path': 0,

    // fix conflicts on "export default interface"
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-empty-interface': 0,
  },
};
