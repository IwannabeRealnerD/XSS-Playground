import styled from "@emotion/styled";
import { oldTerminalColor } from "@constants/style";

export const VisibleContainer = styled.div`
  border: 2px dotted ${oldTerminalColor};
  border-radius: 6px;
  box-sizing: border-box;
  padding: 1em;
  position: relative;
  width: 100%;
`;

export const Title = styled.h2``;

export const Payload = styled.p`
  margin-top: 0.3em;
  text-align: center;
  word-break: break-all;
  margin-bottom: 20px;
`;

export const XssTestContainer = styled.div`
  margin-top: 0.5em;
  height: 3em;
  color: black;
  background-color: white;
  border-radius: 6px;
`;

export const Hr = styled.hr`
  border: 2px dotted ${oldTerminalColor};
  width: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
  filter: brightness(70%);
`;
export const VersionDescription = styled.p`
  padding-top: 2em;
  font-size: 0.9em;
  text-align: center;
  filter: brightness(70%);
`;