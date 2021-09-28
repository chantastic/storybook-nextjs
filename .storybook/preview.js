import "../styles/globals.css";
import { addDecorator } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";

// https://github.com/vercel/next.js/issues/18393#issuecomment-909636489
import * as NextImage from "next/image";

initialize();
addDecorator(mswDecorator);

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage {...props} unoptimized loader={({ src }) => src} />
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
