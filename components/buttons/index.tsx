// import { NextPage } from "next/types";
import { FunctionComponent } from "react";
import { css } from "@emotion/react";

export interface ButtonProps {
  txt: string;
  txtColor?: string;
  bgColor?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ txt, txtColor, bgColor }: ButtonProps) => {
  const buttonStyle = css`
    color: ${txtColor};
    background-color: ${bgColor};
    border-radius: 6px;
    font-size: 1.3em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  `;
  return (
    <button css={buttonStyle} type="button">
      {txt}
    </button>
  );
};

Button.defaultProps = { txtColor: "white", bgColor: "gray" };