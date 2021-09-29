import "../styles/globals.css";
// https://github.com/vercel/next.js/issues/18393#issuecomment-909636489
import * as NextImage from "next/image";
import { setupWorker, rest } from "msw";

// Make sure we're in a browser
if (typeof global.process === "undefined") {
  const worker = setupWorker();
  // Apply default handlers... should be from a setup collection somewhere in a real implementation
  worker.start(
    rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
      return res(ctx.json({ name: "John Doe" }));
    })
  );

  // Assign it to the window for re-use in stories
  window.msw = { worker, rest };
}

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
