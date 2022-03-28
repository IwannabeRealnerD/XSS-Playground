import { ChangeEvent, FunctionComponent, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { oldTerminalColor } from "@constants/style";
import { toLatin, toUniCode } from "@utils/encoder/xssencoder";

export const Encoder: FunctionComponent = () => {
  const [encodedStr, setEncodedStr] = useState("Encoded Data here");
  const [encodeTo, setEncodeTo] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    if (encodeTo === "Latin") {
      const encodedData = toLatin(inputRef.current.value);
      setEncodedStr(encodedData);
      return;
    }
    if (encodeTo === "UniCode") {
      const encodedData = toUniCode(inputRef.current.value);
      setEncodedStr(encodedData);
    }
  }, [encodeTo]);

  const onChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
    if (encodeTo === "Latin") {
      const encodedData = toLatin(e.target.value);
      setEncodedStr(encodedData);
      return;
    }
    if (encodeTo === "UniCode") {
      const encodedData = toUniCode(e.target.value);
      setEncodedStr(encodedData);
    }
  };
  return (
    <div
      css={css`
        border: 2px dotted ${oldTerminalColor};
        border-radius: 6px;
        box-sizing: border-box;
        padding: 1em;
        position: relative;
        width: 100%;
        margin-top: 2em;
      `}
    >
      <h2>encoder</h2>
      <input
        css={css`
          background-color: whitesmoke;
          border: none;
          width: 100%;
          border-radius: 6px;
          height: 2em;
          padding: 0.2em;
          margin-top: 0.5em;
          font-size: 1em;
        `}
        defaultValue="Type"
        onChange={onChangeFunc}
        ref={inputRef}
      />
      <label htmlFor="uniCode">
        <input
          css={css``}
          type="checkbox"
          name="encoding"
          id="uniCodeEncoding"
          value="url"
          onChange={(e) => {
            if (e.target.checked === true) setEncodeTo("UniCode");
          }}
        />
        UniCode
      </label>
      <label htmlFor="Latin">
        <input
          css={css``}
          type="checkbox"
          name="encoding"
          id="Latin"
          value="url"
          onChange={(e) => {
            if (e.target.checked === true) setEncodeTo("Latin");
          }}
        />
        Latin
      </label>
      <label htmlFor="Decimal">
        <input
          css={css``}
          type="checkbox"
          name="encoding"
          id="Decimal"
          value="url"
          onChange={(e) => {
            if (e.target.checked === true) setEncodeTo("Decimal");
          }}
        />
        Decimal
      </label>
      <p
        css={css`
          word-break: break-all;
        `}
      >
        {encodedStr}
      </p>
    </div>
  );
};
