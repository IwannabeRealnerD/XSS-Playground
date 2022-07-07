import { useEffect, useState } from "react";

import { XssPayloadsInterface } from "@customTypes/interface";
import { xssSelector } from "@utils/xssGenerator";
import { Layout } from "@components/layout";

import { Encoder } from "./component/encoder";
import { FirstOnTodayType } from "./type";
import { PayloadGenerator } from "./component/payloadGenerator";
import { tvOnEffect } from "./style";

export const IndexPage = () => {
  const [isWelcomeAnimation, setIsWelecomeAnimation] = useState<boolean>(false);
  const [isAnimationDone, setIsAnimationDone] = useState<boolean>(false);

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
    // if (lastVisit === null) {
    //   setIsWelecomeAnimation(true);
    //   setTimeout(() => {
    //     setIsAnimationDone(true);
    //   }, 700);
    //   localStorage.setItem("lastVist", String(new Date().setHours(0, 0, 0, 0)));
    // }
    // if (Number(lastVisit) <= new Date().setHours(0, 0, 0, 0)) {
    //   setIsWelecomeAnimation(true);
    //   setTimeout(() => {
    //     setIsAnimationDone(true);
    //   }, 600);
    //   localStorage.setItem("lastVist", String(new Date().setHours(0, 0, 0, 0)));
    // }
    setIsWelecomeAnimation(true);
    setTimeout(() => {
      setIsAnimationDone(true);
    }, 700);
    localStorage.setItem("lastVist", String(new Date().setHours(0, 0, 0, 0)));
  }, []);

  return (
    <>
      {isWelcomeAnimation && <div css={tvOnEffect} />}
      <Layout>
        {" ."}
        {isAnimationDone && payloadInfo && (
          <>
            {/* <button type="button" onClick={generateRandomPayload}>
              클릭하세요
            </button> */}
            <PayloadGenerator payloadInfo={payloadInfo} />
            <Encoder />
          </>
        )}
      </Layout>
    </>
  );
};
