module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  "plugins": ["prettier"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    eqeqeq: 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 2,
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    camelcase: 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    semi: [2, 'never'],
    'semi-spacing': [2, { before: false, after: true }],
    'import/no-duplicates': 0,
    "prettier/prettier": "error"
  },
}
