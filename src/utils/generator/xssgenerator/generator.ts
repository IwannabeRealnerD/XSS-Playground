import { xssPayloads } from "./payloads";

interface xssGeneratorInterface {
  (): string;
}

export const randomXss: xssGeneratorInterface = () => {
  const randomIndex = Math.floor(Math.random() * xssPayloads.length);
  return xssPayloads[randomIndex];
};
