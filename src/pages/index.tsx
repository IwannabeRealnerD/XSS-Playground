import { useState } from "react";
import type { NextPage } from "next";
import { css } from "@emotion/react";
import { Button } from "@components/buttons";

const Home: NextPage = () => {
  const [random, setRanddom] = useState(0);
  const generateRandomPayload = () => {
    setRanddom((prev) => prev + 1);
  };
  return (
    <>
      <h1
        css={css`
          cursor: pointer;
        `}
      >
        OBFpentester
      </h1>
      <Button onClick={generateRandomPayload} txt="오늘의 XSS payload">
        {random}
      </Button>
      <p>why</p>
    </>
  );
};

export default Home;