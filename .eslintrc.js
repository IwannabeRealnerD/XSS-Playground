module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: [
    "airbnb",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["react", "import"],
  rules: {
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "react/prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        json: "never",
      },
    ],
    "import/prefer-default-export": 0,
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
