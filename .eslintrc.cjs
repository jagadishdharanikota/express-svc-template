module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        ts: 'always',
      },
    ],
    'linebreak-style': 0,
    'no-underscore-dangle': 'off',
  },
};
