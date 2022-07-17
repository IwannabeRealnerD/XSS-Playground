import { FunctionComponent } from "react";
import { buttonCSS } from "./style";

interface GeneralButtonProps {
  text: string;
  onClick(): void;
}
export const GeneralButton: FunctionComponent<GeneralButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button type="button" onClick={onClick} css={buttonCSS}>
      {text}
    </button>
  );
};
