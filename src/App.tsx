import { useState } from "react";
import { css } from "@emotion/react";

const App = () => {
  var test = 3;
  const [count, setCount] = useState(0);

  return (
    <div
      css={css`
        width: 100%;
        height: 30rem;
        background-color: pink;
      `}
    >
      <img></img>
    </div>
  );
};

export default App;