import { xssPayloads } from "@constants/xsspayloads";
import { XssPayloadsInterface } from "@customtypes/interface";

interface excludeNumberInterface {
  (previousPayload: number): number;
}

interface xssSelectorInterface {
  (previousPayload: string): XssPayloadsInterface;
}

const excludeNumber: excludeNumberInterface = (index) => {
  const randomIndex = Math.floor(Math.random() * xssPayloads.length);
  return randomIndex !== index ? randomIndex : excludeNumber(index);
};

export const xssSelector: xssSelectorInterface = (previousPayload) => {
  if (previousPayload === "") {
    const foundIndex = Math.floor(Math.random() * xssPayloads.length);
    return xssPayloads[foundIndex];
  }
  const currentIndex = xssPayloads.findIndex((payloadObj) => payloadObj.payload === previousPayload);
  const foundIndex = excludeNumber(currentIndex);

  return xssPayloads[foundIndex];
};
