import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Result } from ".";

export default {
  title: "components/pages/result",
  component: Result,
  argTypes: {
    payloadInfo: {
      description: "상위 컴포넌트에서 랜덤으로 전달받는 객체",
      defaultValue: { payload: "<h3>test</h3>", description: "what?" },
    },
  },
  parameters: {
    componentSubtitle: "랜덤으로 결정된 페이로드의 결과가 출력되는 컴포넌트",
  },
} as ComponentMeta<typeof Result>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Result> = (args) => <Result {...args} />;

export const Default = Template.bind({});
Default.args = {};