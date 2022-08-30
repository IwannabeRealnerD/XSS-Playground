import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Encoder } from ".";

export default {
  title: "pages/indexPage/encoder",
  component: Encoder,
  parameters: {
    componentSubtitle: "index 페이지에 출력되는 XSS 인코딩을 수행하는 컴포넌트",
  },
} as ComponentMeta<typeof Encoder>;

const Template: ComponentStory<typeof Encoder> = args => <Encoder {...args} />;

export const Default = Template.bind({});
Default.args = {};