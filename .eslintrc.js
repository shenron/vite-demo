module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
    'airbnb-base',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.vue'],
    },
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    typescript: {
      // use a glob pattern
      project: './tsconfig.json',
    },
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-underscore-dangle': 'off',
    'func-names': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/ban-ts-comment': 'off',

    // fix export/import default
    'import/no-named-as-default': 0,

    // fix tsx component
    'import/prefer-default-export': 0,

    // turn on errors for missing imports
    'import/no-unresolved': 'error',

    // fix conflicts on "export default interface"
    semi: 'off',

    // fix import with airbnb
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
};
