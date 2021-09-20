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



## Notes
