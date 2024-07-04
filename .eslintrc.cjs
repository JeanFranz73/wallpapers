/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'brace-style': ['error'],
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': ['error', { 'multiline': true, 'consistent': true }],
    'object-curly-spacing': [ 'error', 'always', {
      'arraysInObjects': false,
      'objectsInObjects': false
    }],
    
    'vue/no-reserved-component-names': 'off',
    'vue/script-indent': ['error', 2],
    'vue/html-indent': ['error', 2],
    'vue/component-tags-order': [
      'error', {
        'order': [['script', 'template'], 'style']
      }
    ],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case']
  }
}
