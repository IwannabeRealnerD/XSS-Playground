module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["next/core-web-vitals", "plugin:storybook/recommended", "airbnb", "plugin:cypress/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "arrow-body-style": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-declaration"],
      },
    ],
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "ignorePackages", { js: "never", jsx: "never", ts: "never", tsx: "never", json: "never" }],
    "jsx-a11y/anchor-is-valid": 0,
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.stories.**", "stories/**"],
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
  overrides: [
    {
      // prop spreading 특정 파일만 활성화 - 기본 보일러 플레이트를 따라가기 위하여
      files: ["_app.tsx", "*.stories.tsx"],
      rules: { "react/jsx-props-no-spreading": 0 },
    },
  ],
};