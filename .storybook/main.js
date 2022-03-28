const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const toPath = (_path) => path.join(process.cwd(), _path);
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  // TS doc related
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      include: ["**/**.ts", "**/**.tsx"],
    },
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }], require.resolve("@emotion/babel-preset-css-prop")],
      },
    });
    // absolute path related
    // https://github.com/storybookjs/storybook/issues/11639
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   "@components": path.resolve(__dirname, "src/components"),
    //   "@constants": path.resolve(__dirname, "src/constants"),
    //   "@styles": path.resolve(__dirname, "src/styles"),
    //   "@utils": path.resolve(__dirname, "src/utils"),
    //   "@pages": path.resolve(__dirname, "src/pages"),
    //   "@customtypes": path.resolve(__dirname, "src/customtypes"),
    // };
    // config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      }),
    ];

    // emotion related
    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "@emotion/styled": toPath("node_modules/@emotion/styled"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    };
    return config;
  },
};
