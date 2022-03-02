interface converFuncInterface {
  (str: string, converTo: string): string;
}

export const convertFunc: converFuncInterface = (str, converTo) => {
  const arr = str
    .split("")
    .map((char) => {
      return `${converTo + char.charCodeAt(0).toString(16)}`;
    })
    .join("");
  return arr;
};

convertFunc("hi", "\\u00");
