# sample-react-app

Here's a basic React App to help you build a website quickly

It includes:
- [Vite](https://vitejs.dev/) for building
- [MUI](https://mui.com/)
- TODO Testing
- TODO GH Pages setup
- [ESLint](https://eslint.org/)
- TODO Routing?
- TODO TypeScript branch?

## Prerequisites
- Node 18

## How to run it locally

1. Install dependencies
```sh
npm i
```

2. Run it
```
npm run dev
```

3. View it in the browser http://localhost:5173/

## How to deploy to GitHub Pages 

(In progress following https://github.com/gitname/react-gh-pages)

1. Generate a new repository using this as a template: https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/

2. Edit `package.json` to reference your project 
```json
{
  "name": "{repo-name}",
  "homepage": "https://{username}.github.io/{repo-name}",
  ...
```

3. Run the deploy script
```sh
npm run deploy -- -m "Deploy my app to GitHub Pages"
```

4. Configure GitHub Pages [following these steps](https://github.com/gitname/react-gh-pages#8-configure-github-pages)

5. Check your page at https://{username}.github.io/{repo-name}
