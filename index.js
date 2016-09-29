module.exports = {
  parser: require.resolve('babel-eslint'),

  extends: [
    './rules/es2015',
    './rules/react',
    './rules/relay',
  ].map(require.resolve),

  plugins: [
    'eslint-plugin-playlyfe',
  ],

  env: {
    browser: true,
  },

  globals: {
    __DEV__: true,
  },

  rules: {
    'playlyfe/use-exact-dependency': 2,
  },
};

