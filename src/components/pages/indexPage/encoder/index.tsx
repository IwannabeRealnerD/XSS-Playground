import { ChangeEvent, FunctionComponent, useEffect, useRef, useState } from "react";
import { toLatin, toUniCode } from "@utils/encoder/xssencoder";
import { toDecimal } from "@utils/encoder/xssencoder/encoder";

import * as Styled from "./style";

enum encoding {
  "Unicode",
  "Latin",
  "Decimal",
}
export const Encoder: FunctionComponent = () => {
  const [encodedStr, setEncodedStr] = useState("Encoded Data here");
  const [encodeTo, setEncodeTo] = useState<encoding>(encoding.Unicode);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    if (encodeTo === encoding.Latin) {
      const encodedData = toLatin(inputRef.current.value);
      setEncodedStr(encodedData);
      return;
    }
    if (encodeTo === encoding.Unicode) {
      const encodedData = toUniCode(inputRef.current.value);
      setEncodedStr(encodedData);
    }
    if (encodeTo === encoding.Decimal) {
      const encodedData = toDecimal(inputRef.current.value);
      setEncodedStr(encodedData);
    }
  }, [encodeTo]);

  const onChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
    if (encodeTo === encoding.Latin) {
      const encodedData = toLatin(e.target.value);
      setEncodedStr(encodedData);
      return;
    }
    if (encodeTo === encoding.Unicode) {
      const encodedData = toUniCode(e.target.value);
      setEncodedStr(encodedData);
      return;
    }
    if (encodeTo === encoding.Decimal) {
      const encodedData = toDecimal(e.target.value);
      setEncodedStr(encodedData);
    }
  };
  return (
    <Styled.VisibleContainerDiv>
      <h2>encoder</h2>
      <Styled.EncodeInput defaultValue="Type" onChange={onChangeFunc} ref={inputRef} />
      <Styled.Label htmlFor="Unicode">
        <Styled.CheckBoxInput
          type="checkbox"
          name="encoding"
          id="Unicode"
          value="url"
          checked={encodeTo === encoding.Unicode && true}
          onChange={(e) => {
            if (e.target.checked === true) setEncodeTo(encoding.Unicode);
          }}
        />
        UniCode
      </Styled.Label>
      <Styled.Label htmlFor="Latin">
        <Styled.CheckBoxInput
          type="checkbox"
          name="encoding"
          id="Latin"
          value="url"
          checked={encodeTo === encoding.Latin && true}
          onChange={(e) => {
            if (e.target.checked === true) setEncodeTo(encoding.Latin);
          }}
        />
        Latin
      </Styled.Label>
      <Styled.Label htmlFor="Decimal">
        <Styled.CheckBoxInput
          type="checkbox"
          name="encoding"
          id="Decimal"
          value="url"
          checked={encodeTo === encoding.Decimal && true}
          onChange={(e) => {
            if (e.target.checked === true) setEncodeTo(encoding.Decimal);
          }}
        />
        Decimal
      </Styled.Label>
      <Styled.EncodedStrP>{encodedStr}</Styled.EncodedStrP>
    </Styled.VisibleContainerDiv>
  );
};
