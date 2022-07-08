import { css } from "@emotion/react";

export const tvOnEffect = css`
  background-color: white;
  z-index: 30;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: "tvOn" 0.45s forwards ease-in-out;
  @keyframes tvOn {
    0% {
      width: 1rem;
      height: 0.1rem;
    }
    70% {
      width: 100%;
      height: 0.1rem;
    }
    99% {
      width: 100%;
      height: 100%;
    }
  }
`;
// try
