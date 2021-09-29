import { setupWorker, rest } from "msw";
const worker = setupWorker(
  rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
    return res(ctx.json({ name: "John Doe" }));
  })
);

export const start = worker.start;
