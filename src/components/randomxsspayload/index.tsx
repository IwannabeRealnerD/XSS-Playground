import { FunctionComponent, useState } from "react";
import { randomXss } from "@utils/generator/xssgenerator";
import { Button } from "@components/buttons";
import * as styled from "./style";

export const RandomXssPayload: FunctionComponent = () => {
  const [randomPayload, setRandomPayload] = useState<string>("NotInitialized");
  const generateRandomPayload = () => {
    setRandomPayload(randomXss(randomPayload));
  };
  return (
    <>
      <Button onClick={generateRandomPayload} txt="오늘의 XSS payload" />
      {randomPayload !== "NotInitialized" && (
        <>
          <styled.title>Today&#39;s XSS</styled.title>
          <styled.payload>{randomPayload}</styled.payload>
        </>
      )}
    </>
  );
};
