# storybook-nextjs

A setup run-thru of [Storybook](https://storybook.js.org) in a stock [Next.js](https://nextjs.org) app

## Steps

### Next.js

[Instructions](https://nextjs.org/docs)

- run `npx create-next-app --ts --use-npm`
  - npm because i prefer it to yarn
  - typescript because i thought it might add a level of configuration complication
  - **This will create a new project directory. There isn't an `in-place` option.**
- `cd storybook-nextjs`
- `npm run dev`
- `visit http://localhost:3000`

### Storybook

[Instructions](https://storybook.js.org/docs/react/get-started/install)

- run `npx sb init` _in_ project root
  - this makes sense whene there is an existing project (like this). it's not perfectly clear if I were using Storybook to build out a new, single component on design system
  - <mark>are there starters for projects like individual components and design systems for folks who want to use Storybook as their primary artifact?</mark>

> audited 1830 packages in 8.289s
> 236 packages are looking for funding
> run `npm fund` for details

> found 40 vulnerabilities (30 moderate, 10 high)
> run `npm audit fix` to fix them, or `npm audit` for details

- this feels like:
  - a LOT of dependencies
  - a lot of introduced vulnerabilities
- run `npm audit fix`
  - does not resolve vulnerabilities

> fixed 0 of 40 vulnerabilities in 1830 scanned packages
> 40 vulnerabilities required manual review and could not be updated

- `npm run storybook`
  - ✅ works!
- documentation jumps directly into ["What's a story?"](https://storybook.js.org/docs/react/get-started/whats-a-story)
  - because we used a generator, there are LOTS of new files. i think a document on the structure is warrented. even if just a link to another doc
  - items to cover
    - `.storybook`
      - `main.js`
      - `preview.js`
    - `stories`
      - `...stories`
      - `assets`
      - `introduction.mdx`
  - interesting time to cover the difference between stories and markdown
  - Component Story Format (CSF) should be a link to [docs/{library}/api/csf](https://storybook.js.org/docs/react/api/csf)
  - `alt` tags for images are sparce
    - consider "Screenshot of Storybook in browser. The sidebar has Story Button/Primary selected. The main are of the site shows the "Canvas" tab with the rendered button"
  - slight divergance in documentation demo and generated code

_documentation_

```tsx
// Button.stories.ts | Button.stories.tsx

import React from "react";

import { Story, Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};
```

_SB generated_

```tsx
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
```

- Setup a story outside of `/stories`
  - update config to include path
  - add story
  - restart server (not sure if this is always the case for config)
  - [include global css](https://storybook.js.org/docs/react/configure/overview#configure-story-rendering), link conveniently supplied
    - but there are no examples. kinda goes in a link loop
- Why don't I see type errors for `href` when attempting to use the component in a `.tsx` story?
- import `styles/globals.css` to `.storybook/preview.js`
- import `styles/Home.module.css` into `index.stories.tsx`
- no info here on CSS Modules
  - searched and got a lot of "Storybook CSS Modules don't work" hits
    - https://github.com/storybookjs/storybook/issues/12464
    - nothing on the [Styling and CSS](https://storybook.js.org/docs/react/configure/styling-and-css) page
    - [storybook-css-moudles-preset](https://www.npmjs.com/package/storybook-css-modules-preset) is the first promising result
      - `npm install -D storybook-css-modules-preset`
      - `40 fvulnerabilities (30 moderate, 10 high)`
      - append `storybook-css-modules-preset` to `addons` in `./storybook/main.js`
      - works
      - if this is the preferred way, we should document it. if not, we should create a new package
  - static next assets aren't available
    - https://www.google.com/search?q=storybook+assets+next.js&client=safari&rls=en&sxsrf=AOaemvIo6KjwrayvVGhUoG2-A9_PTB4JcA%3A1632184464335&ei=kChJYfTgE6y_0PEP_Muh6Ao&oq=storybook+assets+next.js&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEM0CMgUIABDNAjoHCAAQRxCwAzoICAAQ5AIQsAM6BQgAEIAEOgYIABAWEB46BQghEKABOgcIIRAKEKABSgUIPBIBMUoECEEYAFDHXVi3Z2DAamgBcAJ4AIAB4AGIAfcKkgEFMC42LjKYAQCgAQHIAQvAAQE&sclient=gws-wiz&ved=0ahUKEwj06ND56I7zAhWsHzQIHfxlCK0Q4dUDCA0&uact=5
    - https://stackoverflow.com/questions/64016896/cant-serve-static-files-in-nextjs-storybook
    - https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook
    - https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
    - https://github.com/vercel/next.js/issues/18393
      - https://github.com/vercel/next.js/issues/18393#issuecomment-722024125
      - https://github.com/vercel/next.js/issues/18393#issuecomment-749631898
  - deferring to next commit

## Notes
