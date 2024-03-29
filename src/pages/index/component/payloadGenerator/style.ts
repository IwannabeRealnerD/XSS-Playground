import { css } from "@emotion/react";

import { COLORS } from "@styles/colors";
import { h2css } from "@styles/sharedStyle";

export const wrapper = css`
  background-color: ${COLORS.GRAY80};
  border-radius: 0.375rem;
  padding: 1em;
  margin-bottom: 2rem;
`;

export const subTitle = css`
  ${h2css}
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
