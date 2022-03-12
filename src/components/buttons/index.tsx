import { FunctionComponent } from "react";
import { css } from "@emotion/react";
import { hoverFunc } from "@styles/effect";

interface ButtonProps {
  txt: string;
  isSubmit?: boolean;
  txtColor?: string;
  bgColor?: string;
  onClick: () => void;
}

export const Button: FunctionComponent<ButtonProps> = ({ txt, txtColor, bgColor, isSubmit, onClick }: ButtonProps) => {
  const buttonStyle = css`
    color: ${txtColor};
    background-color: ${bgColor};
    border-radius: 6px;
    font-size: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    cursor: pointer;
    border: none;
    width: max-content;
    margin-bottom: 1em;

    ${hoverFunc()}
  `;
  return (
    <button onClick={onClick} css={buttonStyle} type={isSubmit === true ? "submit" : "button"}>
      {txt}
    </button>
  );
};

Button.defaultProps = { txtColor: "#ffffff", bgColor: "#949494", isSubmit: false };
