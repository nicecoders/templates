module.exports = {
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript"
  ],
  plugins: [
    "@typescript-eslint/eslint-plugin"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  "env": {
      // 您的环境变量（包含多个预定义的全局变量）
      // Your environments (which contains several predefined global variables)
      //
      // browser: true,
      // node: true,
      // mocha: true,
      // jest: true,
      // jquery: true
  },
  "globals": {
      // 您的全局变量（设置为 false 表示它不允许被重新赋值）
      // Your global variables (setting to false means it's not allowed to be reassigned)
      //
      // myGlobal: false
  },
  "rules": {
      // 自定义您的规则
      // Customize your rules
    "react/jsx-no-useless-fragment": 0,
    "@typescript-eslint/no-require-imports": 0
  }
};
