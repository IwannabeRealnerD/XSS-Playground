import { oldTerminalColor } from "@constants/style";
import styled from "@emotion/styled";

export const VisibleContainerDiv = styled.div`
  border: 2px dotted ${oldTerminalColor};
  border-radius: 6px;
  box-sizing: border-box;
  padding: 1em;
  position: relative;
  width: 100%;
  margin-top: 2em;
`;

export const EncodeInput = styled.input`
  background-color: whitesmoke;
  border: none;
  width: 100%;
  border-radius: 6px;
  height: 2em;
  padding: 0.2em;
  margin-top: 0.5em;
  font-size: 1em;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-right: 8px;
`;

export const CheckBoxInput = styled.input`
  margin-right: 4px;
`;

export const EncodedStrP = styled.p`
  word-break: break-all;
  margin-top: 10px;
`;
