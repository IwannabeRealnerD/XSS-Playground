import { FunctionComponent, useState } from "react";
import { xssSelector } from "@utils/generator/xssgenerator";
import { Button } from "@components/buttons";
import * as Styled from "./style";

export const RandomXssPayload: FunctionComponent = () => {
  const [randomPayload, setRandomPayload] = useState<string>("NotInitialized");

  const generateRandomPayload = () => {
    const createdPayload = xssSelector(randomPayload);
    setRandomPayload(createdPayload);
  };

  return (
    <Styled.Container>
      <Button onClick={generateRandomPayload} txt="오늘의 XSS payload" />
      {randomPayload !== "NotInitialized" && (
        <>
          <Styled.Title>Today&#39;s XSS</Styled.Title>
          <Styled.Payload>{randomPayload}</Styled.Payload>
          <Styled.Title>Test this payload</Styled.Title>
          <div dangerouslySetInnerHTML={{ __html: randomPayload }} />
        </>
      )}
    </Styled.Container>
  );
};
