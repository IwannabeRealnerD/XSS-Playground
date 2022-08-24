import { BrowserContainer } from "@components/common/browserContainer";
import { FunctionComponent, useState } from "react";
import { encodingInput, subTitle, title, wrapper } from "./style";

export const PayloadCreator: FunctionComponent = () => {
  const [payload, setPayload] = useState("");

  return (
    <main>
      <h1 css={title}>Make your own payload</h1>
      <BrowserContainer payloadStr={payload} />
      <section css={wrapper}>
        <h2 css={subTitle}>Type what you want</h2>
        <input css={encodingInput} defaultValue="Type" />
      </section>
    </main>
  );
};
