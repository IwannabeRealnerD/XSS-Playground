import { css } from "@emotion/react";
import { COLORS } from "@styles/colors";
import { h2css } from "@styles/sharedStyle";

export const wrapper = css`
  background-color: ${COLORS.GRAY80};
  border-radius: 0.375rem;
  box-sizing: border-box;
  padding: 1em;
  position: relative;
  width: 100%;
  margin: 2rem 0;
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

export const checkBox = css`
  display: inline;
  margin-right: 0.3rem;
  appearance: auto;
`;

export const encodedStrCSS = css`
  margin-top: 0.625rem;
  word-break: break-all;
`;
