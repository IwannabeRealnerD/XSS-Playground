import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BrowserContainer } from ".";

export default {
  title: "components/pages/browsercontainer",
  component: BrowserContainer,
  argTypes: {
    payloadStr: {
      description:
        "div 태그에 dangerouslySetInnerHTML 속성값 내부로 입력되는 XSS 패이로드, 태그 형태의 문자열",
    },
  },
  parameters: {
    componentSubtitle: "XSS 코드 테스트를 위한 브라우저 디자인을 가진 컴포넌트",
    layout: "padded",
  },
} as ComponentMeta<typeof BrowserContainer>;

const Template: ComponentStory<typeof BrowserContainer> = args => (
  <BrowserContainer {...args} />
);

export const Default = Template.bind({});
Default.args = { payloadStr: "<h3>test tag</h3>" };
