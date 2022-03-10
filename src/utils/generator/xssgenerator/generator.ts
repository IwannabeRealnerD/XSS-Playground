import { xssPayloads } from "@constants/xss";

interface randomXssInterface {
  (previousPayload: string): string;
}

interface excludeNumberInterface {
  (previousPayload: number): number;
}

const excludeNumber: excludeNumberInterface = (index) => {
  const randomIndex = Math.floor(Math.random() * xssPayloads.length);
  return randomIndex !== index ? randomIndex : excludeNumber(index);
};

export const randomXss: randomXssInterface = (previousPayload) => {
  const foundIndex = excludeNumber(xssPayloads.indexOf(previousPayload));
  return xssPayloads[foundIndex];
};
