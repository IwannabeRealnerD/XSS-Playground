import { NextPage } from "next/types";
import { css } from "@emotion/react";

interface ButtonProps {
  txt: string;
  txtColor?: string;
  bgColor?: string;
}

export const Button: NextPage<ButtonProps> = ({ txt, txtColor, bgColor }: ButtonProps) => {
  return (
    <button
      css={css`
        color: ${txtColor};
        background-color: ${bgColor};
        border-radius: 6px;
        font-size: 1.3em;
        padding-left: 0.5em;
        padding-right: 0.5em;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        border-style: none;
      `}
      type="button"
    >
      {txt}
    </button>
  );
};

Button.defaultProps = { txtColor: "pink", bgColor: "gray" };
