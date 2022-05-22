/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'operator-linebreak': ['error', 'before'],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-spacing': ['error','always'],
  },
}
