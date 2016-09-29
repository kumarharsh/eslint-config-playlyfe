module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
  ].map(require.resolve),

  plugins: [
    'eslint-plugin-react',
  ],

  rules: {
    // react override
    'react/prop-types': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-key': 2,

    // disable rules
    'react/no-multi-comp': 0,
    'react/prefer-stateless-function': 0,

    // style
    'react/jsx-space-before-closing': 1, // issue with ternary operator

    // disabled due to issues
    'react/jsx-indent-props': 0, // issue with ternary operator
    'react/jsx-closing-bracket-location': 0, // issue with ternary operator
  },
};
