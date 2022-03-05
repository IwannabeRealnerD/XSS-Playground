import type { NextPage } from "next";
import { css } from "@emotion/react";

import { RandomXssPayload } from "@components/randomxsspayload";

const Home: NextPage = () => {

  return (
    <>
      <h1
        css={css`
          cursor: pointer;
        `}
      >
        OBFpentester
      </h1>
      <RandomXssPayload />
    </>
  );
};

export default Home;
