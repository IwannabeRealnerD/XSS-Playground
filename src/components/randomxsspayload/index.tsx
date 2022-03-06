import { randomXss } from "@utils/generator/xssgenerator";
import { Button } from "@components/buttons";

import { FunctionComponent, useState } from "react";

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
          <h1>Today&#39;s XSS</h1>
          {randomPayload}
        </>
      )}
    </>
  );
};
