import { BrowserContainer } from "@components/common/browserContainer";
import { FunctionComponent, useState } from "react";
import { Encoder } from "./component/encoder";
import { encodingInput, subTitle, title, wrapper } from "./style";

export const PayloadCreator: FunctionComponent = () => {
  const [payload, setPayload] = useState("");

  return (
    <main>
      <h1 css={title}>나만의 페이로드</h1>
      <h2 css={subTitle}>페이로드 테스트해보기</h2>
      <BrowserContainer payloadStr={payload} />
      <section css={wrapper}>
        <h2 css={subTitle}>페이로드 입력창</h2>
        <input
          css={encodingInput}
          placeholder="Type your payload"
          onChange={type => {
            setPayload(type.target.value);
          }}
        />
      </section>
      <Encoder />
    </main>
  );
};
