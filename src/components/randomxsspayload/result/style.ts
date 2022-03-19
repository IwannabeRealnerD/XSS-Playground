import styled from "@emotion/styled";
import { oldTerminalColor } from "@constants/style";

export const VisibleContainer = styled.div`
  border: 2px dotted ${oldTerminalColor};
  border-radius: 6px;
  padding: 1em;
`;

export const Payload = styled.p`
  margin-top: 0.3em;
  text-align: center;
  word-break: break-all;
`;
export const Title = styled.h2`
  margin-top: 0.8em;
`;
export const XssTestContainer = styled.div`
  margin-top: 0.5em;
  height: 3em;
  color: black;
  background-color: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Hr = styled.hr`
  border: 2px dotted ${oldTerminalColor};
  width: 100%;
  margin-top: 2em;
  margin-bottom: 2em;
  filter: brightness(75%);
`;
export const VersionDescription = styled.span`
  padding-top: 5em;
  font-size: 0.9em;
  text-align: center;
  filter: brightness(75%);
`;
