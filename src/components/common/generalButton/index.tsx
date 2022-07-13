import { FunctionComponent } from "react";
import { buttonCSS } from "./style";

interface GeneralButtonProps {
  text: string;
}
export const GeneralButton: FunctionComponent<GeneralButtonProps> = ({
  text,
}) => {
  return (
    <button type="button" css={buttonCSS}>
      {text}
    </button>
  );
};