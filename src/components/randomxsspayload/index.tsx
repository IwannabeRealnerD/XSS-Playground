import { FunctionComponent, useState } from "react";
import { randomXss } from "@utils/generator/xssgenerator";
import { Button } from "@components/buttons";
import * as Styled from "./style";

export const RandomXssPayload: FunctionComponent = () => {
  const [randomPayload, setRandomPayload] = useState<string>("NotInitialized");
  const generateRandomPayload = () => {
    setRandomPayload(randomXss(randomPayload));
  };
  return (
    <Styled.Container>
      <Button onClick={generateRandomPayload} txt="오늘의 XSS payload" />
      {randomPayload !== "NotInitialized" && (
        <>
          <Styled.Title>Today&#39;s XSS</Styled.Title>
            <Styled.Payload>{randomPayload}</Styled.Payload>
        </>
      )}
    </Styled.Container>
  );
};
