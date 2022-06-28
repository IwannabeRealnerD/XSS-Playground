import { FunctionComponent } from "react";
import {
  browserHeader,
  browserWrapper,
  browserButton,
  browserBody,
} from "./style";

interface BrowserContainerProps {
  payloadStr: string;
}

export const BrowserContainer: FunctionComponent<BrowserContainerProps> = ({
  payloadStr,
}) => {
  return (
    <section css={browserWrapper}>
      <header css={browserHeader}>
        <div css={browserButton("red")} />
        <div css={browserButton("blue")} />
        <div css={browserButton("green")} />
      </header>
      <div css={browserBody}>
        {/* eslint-disable-next-line react/no-danger-with-children */}
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: payloadStr }} />
      </div>
    </section>
  );
};
