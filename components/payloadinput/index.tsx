import { FunctionComponent } from "react";
import { inputTextStyle, inputStyle } from "./style";

interface PayloadInputProps {
  whichQuery: string;
}
export const PayloadInput: FunctionComponent<PayloadInputProps> = ({ whichQuery }) => {
  return (
    <label css={inputTextStyle} htmlFor={whichQuery}>
      <p>Insert {whichQuery} query here</p>
      <input type="text" id={whichQuery} placeholder="페이로드를 입력해 주세요" css={inputStyle} />
    </label>
  );
};
