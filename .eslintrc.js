module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    // enable additional rules
    "indent": ["warn", 4],
    "linebreak-style": ["warn", "unix"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],

    // override default options for rules from base configurations
    "comma-dangle": ["warn", "always"],
    "no-cond-assign": ["warn", "always"],

    // disable rules from base configurations
    "no-console": "off",
  }
}