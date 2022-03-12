import styled from "@emotion/styled";
import { oldTerminalColor } from "@constants/style";

export const ContainerDiv = styled.div`
  position: relative;
  width: calc(100%-4px);
  border-bottom: 2px dotted ${oldTerminalColor};
`;
export const InnerDiv = styled.div`
  width: calc(100% - 30px);
  margin-left: 15px;
  margin-right: 15px;
  word-break: keep-all;
  @media only screen and (min-width: ${1050}px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
  }
`;
export const H1 = styled.h1`
  cursor: pointer;
  color: ${oldTerminalColor};
  width: min-content;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  margin-bottom: 0.4em;
`;
export const Span = styled.span`
  animation-name: blink-effect;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: step-end;
  @keyframes blink-effect {
    60% {
      opacity: 0;
    }
  }
`;