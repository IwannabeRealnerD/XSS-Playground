import { useEffect, useState } from "react";

import { XssPayloadsInterface } from "@customTypes/interface";
import { xssSelector } from "@utils/xssGenerator";
import { Layout } from "@components/layout";
import { GeneralButton } from "@components/common/generalButton";

import { Encoder } from "./component/encoder";
import { FirstOnTodayType } from "./type";
import { PayloadGenerator } from "./component/payloadGenerator";
import { offScreen, tvOnEffect } from "./style";

export const IndexPage = () => {
  const [isWelcomeAnimation, setIsWelecomeAnimation] = useState<boolean>(false);

  const [payloadInfo, setPayloadInfo] = useState<XssPayloadsInterface>(
    xssSelector(""),
  );

  const generateRandomPayload = () => {
    if (payloadInfo !== undefined) {
      const createdPayload = xssSelector(payloadInfo.payload);
      setPayloadInfo(createdPayload);
    }
  };

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVist") as FirstOnTodayType;
    setIsWelecomeAnimation(true);

    const killAnimation = setTimeout(() => {
      setIsWelecomeAnimation(false);
    }, 650);
    return () => {
      clearTimeout(killAnimation);
    };
  }, []);

  if (isWelcomeAnimation) {
    return (
      <>
        <div css={offScreen} />
        <div css={tvOnEffect} />
      </>
    );
  }

  return (
    <Layout>
      <GeneralButton onClick={generateRandomPayload} text="new payload" />
      {payloadInfo && (
        <>
          <PayloadGenerator payloadInfo={payloadInfo} />
          <Encoder />
        </>
      )}
    </Layout>
  );
};
