import { FunctionComponent } from "react";

interface GeneralButtonProps {
  text: string;
}
export const GeneralButton: FunctionComponent<GeneralButtonProps> = ({
  text,
}) => {
  return <button type="button">{text}</button>;
};
