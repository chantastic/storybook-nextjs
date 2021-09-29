import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../styles/Home.module.css";
import { rest } from "msw";

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
  () => {
    // Looks like loaders are processed in insertion order, so being
    // that we've started the worker in preview before we get close to the canvas
    // worker.user is a sync process and will inject the handler to override the default.
    // The neat thing here would be is use could use res.once multiple times and add
    // a reload button to run through handlers with various outputs.
    const { worker, rest } = window.msw;

    worker.use(
      rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
        return res(
          ctx.json({ name: "This will override the default handler" })
        );
      })
    );
    return {};
  },
  async () => {
    let serverSideProps = await getServerSideProps();

    return serverSideProps.props;
  },
];
