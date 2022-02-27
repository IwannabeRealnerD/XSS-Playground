export const unicodeConverter = (str: string) => {
  const arr = str
    .split("")
    .map((char) => {
      return `\\u00${char.charCodeAt(0).toString(16)}`;
    })
    .join("");
  return arr;
};
