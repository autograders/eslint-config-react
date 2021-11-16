<p align="center">
  <a href="">
    <img width="150" height="150" src="https://raw.githubusercontent.com/autograders/logo/main/logo/graders.png">
  </a>
</p>

<h1 align="center">Autograders React ESLint Config</h1>

<br>

<p align="center">
  <img alt="License" src="https://img.shields.io/github/license/autograders/eslint-config-react" />
  <img alt="npm" src="https://img.shields.io/npm/v/@autograders/eslint-config-react?label=%40autograders%2Feslint-config-react&style=plastic">
</p>

This package provides @autograders react `.eslintrc` as an extensible shared ESLint config.

### 1) Installation

**If you are using NPM**:

```sh
npm install --save-dev @autograders/eslint-config-react
```

**If you are using Yarn**:

```sh
yarn add --dev @autograders/eslint-config-react
```

### 2) Create a `.eslintrc.js` file

Create a `.eslintrc.js` in the same directory where `package.json` is with the following content:

```js
module.exports = {
  extends: ['@autograders/eslint-config-react']
};
```

### 3) Add a lint script inside `package.json`

```json
{
  "scripts": {
    "lint": "eslint \"{src,pages}/**/*.{tsx,ts}\" --fix"
  }
}
```

If you are using NextJS 11 or greater:

```json
{
  "scripts": {
    "lint": "next lint --fix"
  }
}
```

### 4) Test lint

**If you are using NPM**:

```sh
npm run lint
```

**If you are using Yarn**:

```sh
yarn lint
```
