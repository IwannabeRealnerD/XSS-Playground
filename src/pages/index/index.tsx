import { useState } from "react";

import { XssPayloadsInterface } from "@customTypes/interface";
import { xssSelector } from "@utils/xssGenerator";
import { GeneralButton } from "@components/common/generalButton";

import { Encoder } from "./component/encoder";
import { PayloadGenerator } from "./component/payloadGenerator";
import { buttonContainer, title } from "./style";

export const Index = () => {
  const [payloadInfo, setPayloadInfo] = useState<XssPayloadsInterface>(
    xssSelector(""),
  );

  const generateRandomPayload = () => {
    if (payloadInfo !== undefined) {
      const createdPayload = xssSelector(payloadInfo.payload);
      setPayloadInfo(createdPayload);
    }
  };

  return (
    <div>
      <h1 css={title}>Main page</h1>
      <div css={buttonContainer}>
        <GeneralButton onClick={generateRandomPayload} text="new payload" />
      </div>
      {payloadInfo && (
        <>
          <PayloadGenerator payloadInfo={payloadInfo} />
          <Encoder />
        </>
      )}
    </div>
  );
};