module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    chrome: true,
  },
  rules: {
    indent: [1, 2, {
      SwitchCase: 1,
    }],
    'linebreak-style': [2, 'unix'],
    quotes: [1, 'single'],
    'semi-spacing': [2],
    semi: [2, 'always'],
    'brace-style': [2, '1tbs'],
    camelcase: [2],
    'array-bracket-spacing': [2],
    'object-curly-spacing': [2],
    'key-spacing': [2],
    'no-trailing-spaces': [2],
    'comma-spacing': [2],
    'comma-dangle': ['error', 'always-multiline'],
    'computed-property-spacing': [2],
    'keyword-spacing': [2],
    'space-infix-ops': [2],
    'space-unary-ops': [2],
    'no-multi-spaces': [2, { ignoreEOLComments: true }],
    'space-before-blocks': [2],
    'arrow-spacing': [2],
    'space-in-parens': [2, 'never'],
    'func-call-spacing': [2, 'never'],
    'space-before-function-paren': [2, 'never'],
    'no-control-regex': 0,
    'eol-last': [2],
    'no-case-declarations': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
