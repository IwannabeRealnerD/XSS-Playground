export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
  backgrounds: {
    default: "Original background",
    values: [
      {
        name: "Original background",
        value: "#313552",
      },
      {
        name: "white",
        value: "#FFFFFF",
      },
    ],
  },
};
