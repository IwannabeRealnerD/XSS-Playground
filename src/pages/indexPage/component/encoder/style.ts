import { oldTerminalColor } from "@constants/style";
import { css } from "@emotion/react";

export const wrapper = css`
  border: 2px dotted ${oldTerminalColor};
  border-radius: 0.375rem;
  box-sizing: border-box;
  padding: 1em;
  position: relative;
  width: 100%;
  margin-top: 2em;
`;

export const title = css`
  font-size: 1.5rem;
`;

export const encodingInput = css`
  background-color: whitesmoke;
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