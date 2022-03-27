import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { oldTerminalColor } from "@constants/style";

// 글로벌 스타일 기본 패딩 제거 및 글씨체 + 백그라운드 이미지 적용
export const GloabalStyles = css`
  * {
    margin: 0px;
    padding: 0px;
    font-family: "VT323", "Nanum Myeongjo";
  }
  body {
    background-color: #313552;
    color: ${oldTerminalColor};
    font-size: 1.1em;
  }
`;
// 반응형을 위한 컨테이너
export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  word-break: keep-all;
  @media only screen and (min-width: ${1050}px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
  }
`;
