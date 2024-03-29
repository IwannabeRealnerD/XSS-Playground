import { useState } from "react";

import { XssPayloadsInterface } from "@customTypes/interface";
import { xssSelector } from "@utils/xssGenerator";
import { GeneralButton } from "@components/common/generalButton";

import { PayloadGenerator } from "./component/payloadGenerator";
import { buttonContainer, title } from "./style";

export const Index = () => {
  const [payloadInfo, setPayloadInfo] = useState<XssPayloadsInterface>(
    xssSelector(""),
  );

  const generateRandomPayload = () => {
    const createdPayload = xssSelector(payloadInfo.payload);
    setPayloadInfo(createdPayload);
  };

  return (
    <main>
      <h1 css={title}>Main page</h1>
      <div css={buttonContainer}>
        <GeneralButton onClick={generateRandomPayload} text="new payload" />
      </div>
      <PayloadGenerator payloadInfo={payloadInfo} />
    </main>
  );
};
