import { useState } from "react";
import { css } from "@emotion/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      css={css`
        width: 100%;
        height: 30rem;
        background-color: pink;
      `}
    ></div>
  );
}

export default App;
