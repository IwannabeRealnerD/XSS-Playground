import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BrowserContainer } from ".";

export default {
  title: "components/pages/browsercontainer",
  component: BrowserContainer,
  argTypes: {},
} as ComponentMeta<typeof BrowserContainer>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof BrowserContainer> = (args) => <BrowserContainer {...args} />;

export const Default = Template.bind({});
Default.args = { payloadStr: "<h3>test tag</h3>" };
