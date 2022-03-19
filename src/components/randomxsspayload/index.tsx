import { FunctionComponent, useEffect, useState } from "react";
import { xssSelector } from "@utils/generator/xssgenerator";
import { Button } from "@components/buttons";
import { XssPayloadsInterface } from "@customtypes/interface";
import * as Styled from "./style";
import { Result } from "./result";

export const RandomXssPayload: FunctionComponent = () => {
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
    <Styled.Container>
      <Button onClick={generateRandomPayload} txt="Another payload PLZ" />
      {payloadInfo && <Result payloadInfo={payloadInfo} />}
    </Styled.Container>
  );
};
