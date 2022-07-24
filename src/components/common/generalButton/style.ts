import { css } from "@emotion/react";
import { COLORS } from "@styles/colors";

export const buttonCSS = css`
  background-color: ${COLORS.GRAY70};
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  :hover {
    transform: translate(0, -10%);
    transition: ease-in-out 0.3s;
  }
`;
