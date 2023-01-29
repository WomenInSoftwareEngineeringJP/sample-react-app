# sample-react-app

Here's a basic React App to help you build a website quickly

It includes:
- [Vite](https://vitejs.dev/) for building
- [MUI](https://mui.com/)
- TODO Testing
- GH Pages setup (in progress)
- [ESLint](https://eslint.org/)
- TODO Routing?
- TODO TypeScript branch?

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

## How to deploy to GitHub Pages 

(In progress following https://towardsdev.com/deploying-react-application-to-github-pages-with-vite-2d3e32ae97e7)

1. Generate a new repository using this as a template: https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/

2. Edit `package.json` to reference your project 
```json
{
  "name": "{repo-name}",
  "homepage": "https://{username}.github.io/{repo-name}",
  ...
```

3. Update the base path in `vite.config.js` to match your repo name

4. Run the deploy script
```sh
npm run deploy -- -m "Deploy my app to GitHub Pages"
```

5. Configure GitHub Pages [following these steps](https://github.com/gitname/react-gh-pages#8-configure-github-pages)

6. Check your page at https://{username}.github.io/{repo-name}
