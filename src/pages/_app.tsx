import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          body {
            width: calc(100% - 30px);
            padding-top: 3em;
            margin-left: 15px;
            margin-right: 15px;
            word-break: keep-all;
            @media only screen and (min-width: ${1050}px) {
              margin-left: auto;
              margin-right: auto;
              max-width: 1000px;
            }
          }
        `}
      />
      {/* CRN의 기본 보일러플레이트를 따라가기 위하여 */}
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
