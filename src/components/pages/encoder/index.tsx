import { FunctionComponent } from "react";
import { css } from "@emotion/react";
import { oldTerminalColor } from "@constants/style";

export const Encoder: FunctionComponent = () => {
  return (
    <div
      css={css`
        border: 2px dotted ${oldTerminalColor};
        border-radius: 6px;
        box-sizing: border-box;
        padding: 1em;
        position: relative;
        width: 100%;
        margin-top: 2em;
      `}
    >
      <h2>encoder</h2>
      <input
        css={css`
          background-color: whitesmoke;
          border: none;
          width: 100%;
          border-radius: 6px;
          height: 2em;
          padding: 0.2em;
          margin-top: 0.5em;
          font-size: 1em;
        `}
        defaultValue="Type what you want to encode"
      />
    </div>
  );
};
