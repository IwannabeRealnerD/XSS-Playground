import type { NextPage } from "next";
import { css } from "@emotion/react";

import { RandomXssPayload } from "@components/pages/randomxsspayload";
import { Encoder } from "@components/pages/encoder";

const Home: NextPage = () => {
  return (
    <div
      css={css`
        width: 100%;
        max-width: 600px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <RandomXssPayload />
      <Encoder />
    </div>
  );
};

export default Home;
