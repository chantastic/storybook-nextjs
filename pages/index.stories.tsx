import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../styles/Home.module.css";

import Home, { getServerSideProps } from "./index";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

export const Basic = (
  args: ComponentStory<typeof Home>,
  { loaded: serverSideProps }: { loaded: { name: string } }
) => {
  return <Home {...serverSideProps} {...args} />;
};
Basic.loaders = [
  async () => {
    let serverSideProps = await getServerSideProps();

    return serverSideProps.props;
  },
];
