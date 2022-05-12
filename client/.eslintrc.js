const path = require('path');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'no-loops'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb',
        'airbnb-typescript',
      ],

      parserOptions: {
        project: [path.join(__dirname, 'tsconfig.json')], // Specify it only for TypeScript files
      },

      rules: {
        'no-console': 1,
        'no-loops/no-loops': 2,
        'react/require-default-props': 0,
        'object-curly-newline': 0,
        'import/prefer-default-export': 1,
        'react/jsx-no-useless-fragment': 1,
        'operator-linebreak': 0,
      },
    },
  ],
};
