/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2022-09-17 11:41:30
 * @FilePath: /devNews-web-view/.eslintrc.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-09-24 15:28:51
 */

module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  "globals": {
    "async_com": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "arrowFunctions": true,
      "classes": true,
      "modules": true,
      "defaultParams": true.valueOf,
      "jsx": true
    },
    "sourceType": "module"
  },
  "parser": '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint'],
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "settings": {
    // 根据 react 版本进行代码规范
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "rules": {
    "jsx-quotes": ["error", "prefer-double"],
    "no-console": "off",
    "semi": ["error", "always"],
    "indent": ["off"],
    "space-infix-ops": ["error"],
    "multiline-ternary": ["error", "never"],
    "no-multi-assign": ["off"],
    "no-duplicate-imports": ["error"],
    "no-eval": ["error"],
    // "eqeqeq": ["warn", "smart"],
    "eqeqeq": ["off"],
    "no-obj-calls": ["error"],
    "no-empty": ["error"],
    "no-duplicate-case": ["error"],
    "no-dupe-args": ["error"],
    "semi-style": ["warn", "last"],
    "no-delete-var": ["error"],
    "no-shadow": ["off"],
    "no-cond-assign": ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "no-unused-vars": ["off"],
    "react/prop-types": ["off"],
    "@typescript-eslint/no-empty-functionahooks": ["off"],
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/no-this-alias": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-var-requires": ["off"],
    "@typescript-eslint/no-empty-interface": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/explicit-member-accessibility": ['error', { accessibility: 'no-public' }],
  }
};