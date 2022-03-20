import { FunctionComponent } from "react";
import { XssPayloadsInterface } from "@customtypes/interface";

import { chromVersion, safariVersion } from "@constants/versions";
import * as Styled from "./style";

interface ResultProps {
  payloadInfo: XssPayloadsInterface;
}

export const Result: FunctionComponent<ResultProps> = ({ payloadInfo }) => {
  return (
    <>
      <Styled.VisibleContainer>
        <Styled.Title>Today&#39;s XSS</Styled.Title>
        <Styled.Payload>{payloadInfo.payload}</Styled.Payload>
        <Styled.Title>Description of this code</Styled.Title>
        <Styled.Payload>{payloadInfo.description}</Styled.Payload>

        <Styled.Hr />

        <Styled.Title>Test the payload</Styled.Title>
        {/* XSS 코드 실제 실행을 위해 */}
        {/* eslint-disable-next-line react/no-danger  */}
        <Styled.XssTestContainer dangerouslySetInnerHTML={{ __html: payloadInfo.payload }} />
      </Styled.VisibleContainer>
      <Styled.VersionDescription>
        all of these payloads are tested on chrome {chromVersion} and safari {safariVersion}
      </Styled.VersionDescription>
    </>
  );
};
