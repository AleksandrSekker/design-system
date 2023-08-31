module.exports = {
  plugins: ['mdx'],
  extends: ['eslint:recommended', 'plugin:mdx/recommended'],
  rules: {
    indent: ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'storybook/default-exports': 'off',
    // Add any specific rules for .stories.mdx files
  },
};
