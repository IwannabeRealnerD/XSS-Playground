import styled from "@emotion/styled";
import { css } from "@emotion/react";

// 글로벌 스타일 기본 패딩 제거 및 글씨체 + 백그라운드 이미지 적용
export const GloabalStyles = css`
  * {
    margin: 0px;
    padding: 0px;
    font-family: "VT323", "Nanum Myeongjo";
  }
  body {
    background-color: #313552;
  }
`;
// 반응형을 위한 컨테이너
export const Container = styled.div`
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