import { css } from "@emotion/react";
import { Layout } from "src/components/layout";

export const IndexPage = () => {
  return (
    <Layout>
      <div
        css={css`
          width: 100%;
          height: 30rem;
          background-color: pink;
        `}
      >
        this is not for testign
      </div>
    </Layout>
  );
};
