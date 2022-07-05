import { useEffect, useState } from "react";

import { XssPayloadsInterface } from "@customTypes/interface";
import { xssSelector } from "@utils/xssGenerator";
import { Layout } from "@components/layout";

import { Encoder } from "./component/encoder";
import { PayloadGenerator } from "./component/payloadGenerator";

export const IndexPage = () => {
  const [payloadInfo, setPayloadInfo] = useState<XssPayloadsInterface>();

  useEffect(() => {
    setPayloadInfo(xssSelector(""));
  }, []);

  const generateRandomPayload = () => {
    if (payloadInfo !== undefined) {
      const createdPayload = xssSelector(payloadInfo.payload);
      setPayloadInfo(createdPayload);
    }
  };

  return (
    <Layout>
      {payloadInfo && <PayloadGenerator payloadInfo={payloadInfo} />}
      <Encoder />
    </Layout>
  );
};
