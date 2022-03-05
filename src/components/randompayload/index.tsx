import { FunctionComponent } from "react";

interface PayloadOutputProps {
  payload: string;
}

export const PayloadOutput: FunctionComponent<PayloadOutputProps> = ({ payload }) => {
  return (
    <>
      <h1>Today&#39;s Payload</h1>
      {payload}
    </>
  );
};
