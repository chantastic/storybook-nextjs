import "../styles/globals.css";
import { start } from "./initialize_worker";

// https://github.com/vercel/next.js/issues/18393#issuecomment-909636489
import * as NextImage from "next/image";

start();

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
