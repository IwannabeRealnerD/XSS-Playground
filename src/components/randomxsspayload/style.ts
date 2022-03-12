import styled from "@emotion/styled";
import { oldTerminalColor } from "@constants/style";
// 반응형을 위한 컨테이너

export const Payload = styled.p`
  margin-top: 1em;
  color: ${oldTerminalColor};
  border: 2px dotted ${oldTerminalColor};
  border-radius: 6px;
  padding: 0.4em;
`;
export const Title = styled.h1`
  color: ${oldTerminalColor};
`;

export const Container = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;