import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import importPlugin from 'eslint-plugin-import';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import globals from 'globals';

const __dirname = path.dirname(import.meta.url);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default [
  ...compat.config({
    extends: ['@vue/eslint-config-airbnb'],
    rules: {
      // fix airbnb conflicts
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
    },
  }),
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  {
    files: ['**/*.+(ts|tsx|mts|cts|js|mjs|cjs|jsx)'],
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tsParser,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-underscore-dangle': 'off',
      'import/no-named-as-default': 0,
      'react/jsx-props-no-spreading': 0,
      'import/prefer-default-export': 0,
      '@typescript-eslint/no-unused-vars': [
        'error', {
          ignoreRestSiblings: true,
          caughtErrors: 'none',
        },
      ],
      'no-unused-vars': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-empty-object-type': 0,

      // tsx
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'jsx-a11y/control-has-associated-label': 0,
      'jsx-a11y/anchor-has-content': 0,
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      '@typescript-eslint/no-unused-vars': 0,
    },
  },
  {
    files: ['eslint.config.mjs'],
    languageOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
