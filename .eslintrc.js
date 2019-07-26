module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'vue/html-self-closing': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/order-in-components': 'off',
    'vue/require-default-prop': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
