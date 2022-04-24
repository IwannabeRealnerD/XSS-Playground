import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TopNav } from ".";

export default {
  title: "components/TopNav",
  component: TopNav,
  parameters: {
    componentSubtitle: "메인 페이지 맨위에 존재하는 NavBar",
  },
} as ComponentMeta<typeof TopNav>;

const Template: ComponentStory<typeof TopNav> = (args) => <TopNav {...args} />;

export const Default = Template.bind({});
Default.args = {};