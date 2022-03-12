import { xssPayloads } from "@constants/xss";

interface xssSelectorInterface {
  (previousPayload: string): string;
}

interface excludeNumberInterface {
  (previousPayload: number): number;
}

const excludeNumber: excludeNumberInterface = (index) => {
  const randomIndex = Math.floor(Math.random() * xssPayloads.length);
  return randomIndex !== index ? randomIndex : excludeNumber(index);
};

export const xssSelector: xssSelectorInterface = (previousPayload) => {
  const foundIndex = excludeNumber(xssPayloads.indexOf(previousPayload));
  return xssPayloads[foundIndex];
};
