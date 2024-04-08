import pluginVue from 'eslint-plugin-vue';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
    languageOptions: {
      parser: tsParser
    },
    // extends: [
    //   '@vue/eslint-config-airbnb-with-typescript',
    // ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-underscore-dangle': 'off',
      'import/no-named-as-default': 0,
      'react/jsx-props-no-spreading': 0,
      'import/prefer-default-export': 0,
    },
  },
  ...pluginVue.configs['flat/recommended'],
]
