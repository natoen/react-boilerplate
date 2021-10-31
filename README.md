# React Boilerplate

Everything right here or in the config is the minimal requirements that we need to bundle a TypeScript, HTML, and CSS frontend.

- Node.js v16.13
- NPM v8.1.1

### Installation

Everything is already in the `package.json` so just `npm install` and skip to the 4th step.

1. `npm install --save react react-dom`
2. `npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest webpack webpack-cli babel-loader style-loader css-loader html-loader html-webpack-plugin @babel/preset-react @babel/core @babel/cli @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-typescript`
3. Copy the (TypeScript, Webpack, and Babel) configs, the `src` and the scripts in `package.json`.
4. `npm run bundle`
