import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserContainer } from "../src/components/randomxsspayload/result/browsercontainer";

export default {
  // 위치 설정 가능
  title: "browsercontainer",
  // 실제 컴포넌트의 레퍼런스
  component: BrowserContainer,
  // argTypes는 proptypes나 TS자체 Interface를 보고 알아서 inference해옴 - description은 따로 작성
  argTypes: {},
} as ComponentMeta<typeof BrowserContainer>;

// 1. 컴포넌트를 템플릿으로 인스턴스화
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof BrowserContainer> = (args) => <BrowserContainer {...args} />;

// 2. 인스턴스화 된 것을 기반으로 각각 Variants 생성
// 각각 variant에 대한 값을 바꿔 줄 수 있음
export const Default = Template.bind({});
Default.args = { payloadStr: "<h3>test tag</h3>" };