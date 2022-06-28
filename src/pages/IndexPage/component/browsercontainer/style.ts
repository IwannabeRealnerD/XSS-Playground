import { css, SerializedStyles } from "@emotion/react";

interface browserButtonDef {
  (buttonColor: "red" | "blue" | "green"): SerializedStyles;
}

export const browserWrapper = css`
  margin-top: 0.5em;
  height: 150px;
  color: black;
  background-color: whitesmoke;
  border-radius: 6px;
`;

export const browserHeader = css`
  top: 0;
  width: 100%;
  height: 20%;
  position: relative;
  background-color: darkgray;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  align-items: center;
`;

export const browserButton: browserButtonDef = buttonColor => css`
  background-color: ${buttonColor};
  position: relative;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-left: 6px;
`;

export const browserBody = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80%;
`;
