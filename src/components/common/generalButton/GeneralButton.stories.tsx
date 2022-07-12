import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GeneralButton } from ".";

export default {
  title: "components/common/GeneralButton",
  component: GeneralButton,
  parameters: {
    componentSubtitle: "페이지 전역에서 사용되는 버튼",
  },
} as ComponentMeta<typeof GeneralButton>;

const Template: ComponentStory<typeof GeneralButton> = args => (
  <GeneralButton {...args} />
);

export const Default = Template.bind({});
Default.args = { text: "example" };
