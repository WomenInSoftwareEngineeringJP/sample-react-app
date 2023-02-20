# sample-react-app

Here's a basic React App to help you build a website quickly

It includes:

- [Vite](https://vitejs.dev/) for building
- [MUI](https://mui.com/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)

## Prerequisites

- Node 18
- A GitHub account

## How to run it locally

1. Install dependencies

```sh
npm i
```

2. Run it

```
npm run dev
```

3. View it in the browser http://localhost:5173/sample-react-app

## Run unit tests

```sh
npm run test
```

### How to deploy your website to GithubPages

1. In `vite.config.ts` file add your repository name in `base`.
2. In `package.json` edit `website` adding your GitHub handle and repository name.
3. Build your website by running `npm run build` command.
4. Deploy to GitHub pages by running `npm run deploy` command.
5. Check your website on the url you added in `website`. It may take a few minutes to deploy.
