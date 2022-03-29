import { FunctionComponent } from "react";
import * as Styled from "./style";

interface BrowserContainerProps {
  payloadStr: string;
}

export const BrowserContainer: FunctionComponent<BrowserContainerProps> = ({ payloadStr }) => {
  return (
    <Styled.BrowserContainer>
      <Styled.BrowserTopBar>
        <Styled.BrowserLikeButton buttonColor="red" />
        <Styled.BrowserLikeButton buttonColor="orange" />
        <Styled.BrowserLikeButton buttonColor="green" />
      </Styled.BrowserTopBar>
      <Styled.BrowserBody>
        {/* eslint-disable-next-line react/no-danger-with-children */}
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: payloadStr }} />
      </Styled.BrowserBody>
    </Styled.BrowserContainer>
  );
};
