import {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";
import { toLatin, toUniCode, toDecimal } from "./util";

import {
  checkBox,
  encodedStrCSS,
  encodingInput,
  subTitle,
  wrapper,
} from "./style";
import { encoding } from "./type";

export const Encoder: FunctionComponent = () => {
  const [encodedStr, setEncodedStr] = useState("Encoded Data here");
  const [encodeTo, setEncodeTo] = useState<encoding>("Unicode");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    if (encodeTo === "Latin") {
      const encodedData = toLatin(inputRef.current.value);
      setEncodedStr(encodedData);
      return;
    }
    if (encodeTo === "Unicode") {
      const encodedData = toUniCode(inputRef.current.value);
      setEncodedStr(encodedData);
    }
    if (encodeTo === "Decimal") {
      const encodedData = toDecimal(inputRef.current.value);
      setEncodedStr(encodedData);
    }
  }, [encodeTo]);

  const encodeFunction = (e: ChangeEvent<HTMLInputElement>) => {
    if (encodeTo === "Latin") {
      const encodedData = toLatin(e.target.value);
      setEncodedStr(encodedData);
      return;
    }
    if (encodeTo === "Unicode") {
      const encodedData = toUniCode(e.target.value);
      setEncodedStr(encodedData);
      return;
    }
    if (encodeTo === "Decimal") {
      const encodedData = toDecimal(e.target.value);
      setEncodedStr(encodedData);
    }
  };

  return (
    <div css={wrapper}>
      <h2 css={subTitle}>인코더</h2>
      <input
        css={encodingInput}
        placeholder="Encode this to..."
        onChange={encodeFunction}
        ref={inputRef}
      />
      <div>
        <label htmlFor="Unicode">
          <input
            css={checkBox}
            type="checkbox"
            name="encoding"
            id="Unicode"
            checked={encodeTo === "Unicode"}
            onChange={e => {
              if (e.target.checked === true) setEncodeTo("Unicode");
            }}
          />
          UniCode
        </label>
        <label htmlFor="Latin">
          <input
            type="checkbox"
            css={checkBox}
            name="encoding"
            id="Latin"
            checked={encodeTo === "Latin"}
            onChange={e => {
              if (e.target.checked === true) setEncodeTo("Latin");
            }}
          />
          Latin
        </label>
        <label htmlFor="Decimal">
          <input
            type="checkbox"
            css={checkBox}
            name="encoding"
            id="Decimal"
            checked={encodeTo === "Decimal"}
            onChange={e => {
              if (e.target.checked === true) setEncodeTo("Decimal");
            }}
          />
          Decimal
        </label>
      </div>
      <h3>Result</h3>
      <p css={encodedStrCSS}>{encodedStr}</p>
    </div>
  );
};
