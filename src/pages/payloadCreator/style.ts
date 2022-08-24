import { css } from "@emotion/react";
import { COLORS } from "@styles/colors";
import { h1css, h2css } from "@styles/sharedStyle";

export const wrapper = css`
  margin: 2rem 0;
  background-color: ${COLORS.GRAY80};
  border-radius: 0.375rem;
  padding: 1em;
`;

export const title = css`
  ${h1css}
`;

export const subTitle = css`
  ${h2css}
`;

export const encodingInput = css`
  background-color: white;
  border: none;
  width: 100%;
  border-radius: 0.375rem;
  height: 2em;
  padding: 0.2em;
  margin-top: 0.5em;
  font-size: 1em;
  margin-bottom: 0.625rem;
`;
