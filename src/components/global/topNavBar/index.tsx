import { css } from "@emotion/react";
import { COLORS } from "@styles/colors";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const TopNavBar: FunctionComponent = () => {
  return (
    <nav
      css={css`
        height: 3rem;
        display: flex;
        align-items: center;
        background-color: ${COLORS.GRAY70};
        margin-bottom: 1rem;
      `}
    >
      <ul
        css={css`
          display: flex;
          margin: 0 3rem;
          li {
            margin-right: 2rem;
            @media (hover: hover) {
              a:hover {
                background-color: ${COLORS.MAIN};
                border-radius: 0.5rem;
              }
            }
            :last-of-type {
              margin-right: 0;
            }
            a {
              font-size: 1rem;
              padding: 0.5rem;
            }
          }
        `}
      >
        <li>
          <Link to="/">Today&#39;s XSS</Link>
        </li>
        <li>
          <Link to="payload-creator">Create your own payload</Link>
        </li>
      </ul>
    </nav>
  );
};
