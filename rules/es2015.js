module.exports = {
  extends: [
    'eslint-config-airbnb/rules/best-practices',
    'eslint-config-airbnb/rules/errors',
    'eslint-config-airbnb/rules/legacy',
    'eslint-config-airbnb/rules/node',
    './style',
    'eslint-config-airbnb/rules/variables',
    'eslint-config-airbnb/rules/es6',

    'eslint-config-airbnb/rules/strict',
  ].map(require.resolve),

  plugins: [
    'eslint-plugin-babel',
  ],

  rules: {
    // Disallow Early Use ... allow functions
    'no-use-before-define': [2, 'nofunc'],
    eqeqeq: [2, 'allow-null'],

    'arrow-body-style': 0,

    /* fix issues in eslint + babel */
    // https://github.com/babel/eslint-plugin-babel.git
    // this will fix capital decorator issue
    'new-cap': 0,
    'babel/new-cap': [2, {newIsCap: true}],

    // Handles async/await functions correctly
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': 1,

    // Handles destructuring arrays with flow type in function parametres
    'array-bracket-spacing': 0,
    'babel/array-bracket-spacing': 0,

    // doesn't complain about export x from "mod"; or export * as x from "mod";
    'object-curly-spacing': 0,
    'babel/object-curly-spacing': 0,

    // doesn't fail when using object spread (...obj)
    'object-shorthand': 0,
    'babel/object-shorthand': [2, 'always'],

    // Handles async functions correctly
    'arrow-parens': 0,
    'babel/arrow-parens': [2, 'always'],
    // "no-await-in-loop": 0,
    // "babel/no-await-in-loop": 1,
  },
};
