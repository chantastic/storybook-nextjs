import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../styles/Home.module.css";

import Home from "./index";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
