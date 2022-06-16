import { css } from "@emotion/react";
import { DESKTOP } from "src/styles/mediaQuery";

export const layout = css`
  width: 1200px;
  padding: 0 2rem;
  margin: auto;
  transition: padding 0.2s ease;
  ${DESKTOP} {
    width: 1000px;
  }
`;
