import { FunctionComponent } from "react";
import { tagSelector, title, wrapper } from "./style";

export const PayloadCreator: FunctionComponent = () => {
  return (
    <div>
      <h1 css={title}>Make your own Payload</h1>
      <main css={wrapper}>
        <div>
          <div css={tagSelector}>hover for tag</div>
        </div>
      </main>
    </div>
  );
};
