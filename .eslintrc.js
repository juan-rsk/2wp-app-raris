module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 13,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'max-len': ['warn', {'code': 100}],
    'new-cap': 'off',
    'require-jsdoc': 'off',
    'no-unused-vars': 'warn',
  },
};
