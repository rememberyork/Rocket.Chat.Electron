module.exports = {
  extends: '@rocket.chat/eslint-config-alt/react',
  rules: {
    'generator-star-spacing': 'off',
    'new-cap': ['error', { capIsNewExceptions: ['Reconciler'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
};
