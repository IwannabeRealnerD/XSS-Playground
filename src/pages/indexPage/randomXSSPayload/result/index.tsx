import { FunctionComponent } from "react";
import { XssPayloadsInterface } from "@customTypes/interface";

import { chromVersion, safariVersion } from "@constants/versions";
import { css } from "@emotion/react";
import { container, payload, hr, versionDescription } from "./style";

import { BrowserContainer } from "./browsercontainer";

interface ResultProps {
  payloadInfo: XssPayloadsInterface;
}


export const Result: FunctionComponent<ResultProps> = ({ payloadInfo }) => {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <section css={container}>
        <h2>Today&#39;s XSS</h2>
        <p css={payload}>{payloadInfo.payload}</p>

        <h2>Description of this code</h2>
        <p css={payload}>{payloadInfo.description}</p>

        <hr css={hr} />

        <h2>Test the payload</h2>
        <BrowserContainer payloadStr={payloadInfo.payload} />
        <p css={versionDescription}>
          all of these payloads are tested on chrome {chromVersion} and safari {safariVersion}
        </p>
      </section>
    </div>
  );
};
