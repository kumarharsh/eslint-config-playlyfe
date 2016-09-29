module.exports = {
  extends: [
    'eslint-config-airbnb/rules/style',
  ].map(require.resolve),

  rules: {
    // comma
    'key-spacing': [2, {mode: 'minimum'}],

    // indent
    indent: [2, 2, {SwitchCase: 1}],
    'no-nested-ternary': 1,

    // max-len
    'max-len': 0,

    'newline-per-chained-call': 0,
  },
};
