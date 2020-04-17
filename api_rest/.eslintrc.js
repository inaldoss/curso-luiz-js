module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "linebreak-style": "off",
    "class-methods-use-this": "off",
    "import/newline-after-import": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    "max-len": "off",
    "camelcase": "off"
  },
};
