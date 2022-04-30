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
    "no-unused-vars": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "arrow-body-style": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function", "function-declaration"],
      },
    ],
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "ignorePackages", { js: "never", jsx: "never", ts: "never", tsx: "never", json: "never" }],
    "jsx-a11y/anchor-is-valid": "off",
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
      rules: { "react/jsx-props-no-spreading": "off" },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
      },
    },
  ],
};
