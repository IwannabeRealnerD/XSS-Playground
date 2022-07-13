import { FunctionComponent } from "react";
import { XssPayloadsInterface } from "@customTypes/interface";

import { chromVersion, safariVersion } from "@constants/versions";
import { container, payload, hr, versionDescription, title } from "./style";
import { BrowserContainer } from "../browserContainer";

interface PayloadGeneratorProps {
  payloadInfo: XssPayloadsInterface;
}

export const PayloadGenerator: FunctionComponent<PayloadGeneratorProps> = ({
  payloadInfo,
}) => {
  return (
    <div>
      <section css={container}>
        <h2 css={title}>Today&#39;s XSS</h2>
        <p css={payload}>{payloadInfo.payload}</p>

        <h2 css={title}>Description of this code</h2>
        <p css={payload}>{payloadInfo.description}</p>

        <hr css={hr} />

        <h2 css={title}>Test the payload</h2>
        <BrowserContainer payloadStr={payloadInfo.payload} />
        <p css={versionDescription}>
          all of these payloads are tested on chrome {chromVersion} and safari
          {safariVersion}
        </p>
      </section>
    </div>
  );
};