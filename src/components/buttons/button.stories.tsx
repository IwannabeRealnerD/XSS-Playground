import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  // 위치 설정 가능
  title: "components/Button",
  // 실제 컴포넌트의 레퍼런스
  component: Button,
  // argTypes는 proptypes나 TS자체 Interface를 보고 알아서 inference해옴 - description은 따로 작성
  argTypes: {
    txt: {
      description: "버튼에 출력될 text",
    },
    txtColor: {
      description: "텍스트의 색깔",
      control: { type: "color" },
    },
    isSubmit: {
      description: "submit 설정 여부를 나타내는 값",
      control: { type: "boolean" },
    },
    bgColor: {
      description: "버튼 배경색",
      control: { type: "color" },
    },
    onClick: {
      description: "버튼 클릭 시 실행되는 함수",
    },
  },
  parameters: {
    componentSubtitle: "프로젝트 전체적으로 사용되는 버튼",
  },
} as ComponentMeta<typeof Button>;

// 1. 컴포넌트를 템플릿으로 인스턴스화
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// 2. 인스턴스화 된 것을 기반으로 각각 Variants 생성
// 각각 variant에 대한 값을 바꿔 줄 수 있음
export const Default = Template.bind({});
Default.args = { txt: "Default button" };
