import { css } from "@emotion/react";
import { oldTerminalColor } from "@constants/style";

export const container = css`
  border: 2px dotted ${oldTerminalColor};
  border-radius: 6px;
  box-sizing: border-box;
  padding: 1em;
  position: relative;
  width: 100%;
`;

export const payload = css`
  margin-top: 0.3em;
  text-align: center;
  word-break: break-all;
  margin-bottom: 20px;
`;

export const hr = css`
  border: 2px dotted ${oldTerminalColor};
  width: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
  filter: brightness(70%);
`;
export const versionDescription = css`
  padding-top: 2em;
  font-size: 0.9em;
  text-align: center;
  filter: brightness(70%);
`;