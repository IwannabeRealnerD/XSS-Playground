import { FunctionComponent } from "react";
import * as Styled from "./style";

interface BrowserContainerProps {
  payloadStr: string;
}
export const BrowserContainer: FunctionComponent<BrowserContainerProps> = ({ payloadStr }) => {
  // eslint-disable-next-line react/no-danger
  // eslint-disable-next-line react/no-danger-with-children
  return <Styled.BrowserContainer dangerouslySetInnerHTML={{ __html: payloadStr }} />;
};