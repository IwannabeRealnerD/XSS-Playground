import { FunctionComponent } from "react";
import { tagSelector, title } from "./style";

export const PayloadCreator: FunctionComponent = () => {
  return (
    <main>
      <h1 css={title}>Make your own Payload</h1>
      <div>
        <div css={tagSelector}>hover for tag</div>
      </div>
    </main>
  );
};
