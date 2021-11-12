const path = require('path');
const tsconfig = require(path.join(process.cwd(), 'tsconfig.json'));

const tscpaths = Object.keys(tsconfig.compilerOptions.paths || {}).map((p) =>
  p.split('/')[0].trim()
);

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  overrides: [
    {
      files: ['src/**/*.tsx', 'src/**/*.ts', 'test/**/*.tsx', 'test/**/*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^\\u0000'],
              ['^@?\\w'],
              ['^'],
              ['^@autograders'],
              [`^(${tscpaths.join('|')})`],
              ['^\\.']
            ]
          }
        ]
      }
    }
  ]
};
