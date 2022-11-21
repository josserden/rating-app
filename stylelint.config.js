module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-order-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'string-quotes': 'single',
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'max-line-length': 400,
  },
};
