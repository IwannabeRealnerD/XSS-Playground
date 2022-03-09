import type { AppProps } from "next/app";
import { TopNav } from "@components/topnav";
import { Global } from "@emotion/react";
import { GloabalStyles, Container } from "../../styles/gloabalstyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={GloabalStyles} />
      <TopNav />
      <Container>
        {/* CNA의 기본 보일러플레이트를 따라가기 위하여 */}
        {/* eslint-disable-next-line */}
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
