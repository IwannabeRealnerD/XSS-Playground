import { FunctionComponent } from "react";
import { XssPayloadsInterface } from "@customTypes/interface";

import { chromVersion, safariVersion } from "@constants/versions";
import { BrowserContainer } from "@components/common/browserContainer";

import { wrapper, payload, hr, versionDescription, subTitle } from "./style";

interface PayloadGeneratorProps {
  payloadInfo: XssPayloadsInterface;
}

export const PayloadGenerator: FunctionComponent<PayloadGeneratorProps> = ({
  payloadInfo,
}) => {
  return (
    <section css={wrapper}>
      <h2 css={subTitle}>Today&#39;s XSS</h2>
      <p css={payload}>{payloadInfo.payload}</p>

      <h2 css={subTitle}>Description of this code</h2>
      <p css={payload}>{payloadInfo.description}</p>

      <hr css={hr} />

      <h2 css={subTitle}>Test the payload</h2>
      <BrowserContainer payloadStr={payloadInfo.payload} />
      <p css={versionDescription}>
        all of these payloads are tested on chrome {chromVersion} and safari
        {safariVersion}
      </p>
    </section>
  );
};
