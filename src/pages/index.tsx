import { useState } from "react";
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { Button } from "@components/buttons";

import { PayloadOutput } from "@components/randompayload";
import { randomXss } from "@utils/generator/xssgenerator";

const Home: NextPage = () => {
  const [randomStr, setRandomStr] = useState<string | null>(null);
  const generateRandomPayload = () => {
    setRandomStr(randomXss());
  };

  // useEffect(() => {}, [isRandom]);

  return (
    <>
      <h1
        css={css`
          cursor: pointer;
        `}
      >
        OBFpentester
      </h1>
      <Button onClick={generateRandomPayload} txt="오늘의 XSS payload" />
      {randomStr && <PayloadOutput payload={randomStr} />}

      <p>why</p>
    </>
  );
};

export default Home;
