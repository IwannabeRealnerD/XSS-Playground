import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const TopNavBar: FunctionComponent = () => {
  return (
    <div>
      <Link to="/">Today&#39;s XSS</Link>
      <Link to="payload-creator">Create your own payload</Link>
    </div>
  );
};
