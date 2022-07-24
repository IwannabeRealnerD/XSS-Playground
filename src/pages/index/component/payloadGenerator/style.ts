import { css } from "@emotion/react";
import { COLORS } from "@styles/colors";

export const container = css`
  background-color: ${COLORS.GRAY80};
  border-radius: 0.375rem;
  box-sizing: border-box;
  padding: 1em;
  position: relative;
  width: 100%;
`;
export const title = css`
  font-size: 1.5rem;
`;

export const payload = css`
  margin-top: 0.3em;
  text-align: center;
  word-break: break-all;
  margin-bottom: 1.25rem;
`;

export const hr = css`
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
