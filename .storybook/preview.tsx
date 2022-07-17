import React from "react";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/styles/globalStyle";
export const decorators = [
  Story => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
