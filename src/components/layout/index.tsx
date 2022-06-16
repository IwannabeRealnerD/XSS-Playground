import { FunctionComponent, ReactNode } from "react";
import { layout } from "./style";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <div css={layout}>{children}</div>;
};
