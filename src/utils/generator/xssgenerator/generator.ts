import { xssPayloads } from "./payloads";

interface xssGeneratorInterface {
  (): string;
}

export const randomXss: xssGeneratorInterface = () => {
  return xssPayloads[0];
};
