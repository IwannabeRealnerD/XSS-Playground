import type { NextPage } from "next";
import { css } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <>
      <h1
        css={css`
          font-size: 3em;
          margin-top: 0px;
          margin-bottom: 0px;
          margin-block-start: 0px;
          margin-block-end: 0px;
          cursor: pointer;
        `}
      >
        hi
      </h1>
      <p>why</p>
    </>
  );
};

export default Home;
