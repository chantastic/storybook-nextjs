declare interface Window {
  msw: {
    rest: typeof import("msw").rest;
    worker: import("msw").SetupWorkerApi;
  };
}
