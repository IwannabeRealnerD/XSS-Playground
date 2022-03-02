interface converFuncInterface {
  (str: string): string;
}

export const convertUniCode: converFuncInterface = (str) => {
  const arr = str
    .split("")
    .map((char) => {
      return `\\u00${char.charCodeAt(0).toString(16)}`;
    })
    .join("");
  return arr;
};

export const convertLatin: converFuncInterface = (str) => {
  const arr = str
    .split("")
    .map((char) => {
      return `\\x28${char.charCodeAt(0).toString(16)}`;
    })
    .join("");
  return arr;
};
