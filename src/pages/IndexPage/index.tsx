import { useEffect, useState } from "react";

import { XssPayloadsInterface } from "@customTypes/interface";
import { xssSelector } from "@utils/xssGenerator";
import { Layout } from "@components/layout";

import { Result } from "./component";

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
    <Layout>{payloadInfo && <Result payloadInfo={payloadInfo} />} </Layout>
  );
};
