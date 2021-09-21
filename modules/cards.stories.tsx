import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AnchorCard } from "./cards";

export default {
  title: "Cards/AnchorCard",
  component: AnchorCard,
  argTypes: {},
} as ComponentMeta<typeof AnchorCard>;

// TODO: really nice that i'm able to control args in this situation where i need to wrap the element to make present to existing specs
// TODO: question?
const Template: ComponentStory<typeof AnchorCard> = (args) => (
  <div style={{ display: "flex" }}>
    <AnchorCard {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <React.Fragment>
      <h2>Yooo</h2>
      <p>We've got a story</p>
    </React.Fragment>
  ),
};

export const Duplicate = Template.bind({});
Basic.args = {
  children: (
    <React.Fragment>
      <h2>I did it for the tests</h2>
      <p>This is added only to progress thru the Chromatic setup</p>
    </React.Fragment>
  ),
};
