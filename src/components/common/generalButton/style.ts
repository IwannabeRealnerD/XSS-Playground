import { css } from "@emotion/react";

export const buttonCSS = css`
  border: 2px outset;
  padding: 0.3rem 0.8rem;
  :hover {
    transform: translate(0, -10%);
    transition: ease-in-out 0.3s;
    border: 2px inset;
  }
`;
