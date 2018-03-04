# Cogito Notes 📝
[![Build Status](https://travis-ci.com/matepapp/cogito-notes.svg?token=xfz6hSPQHtHd5XkqKmZj&branch=master)](https://travis-ci.com/matepapp/cogito-notes) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

My Bachelor thesis at Budapest University of Technology about a community based lecture notes editor web application using [React](https://reactjs.org), [Redux](https://redux.js.org).

Check it out live [here](https://matepapp.github.io/cogito-notes/)!

## Tech stack
- [yarn](https://yarnpkg.com/en/)
- [create-react-app](https://github.com/facebook/create-react-app)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io) 
- [Flow](https://flow.org/en/) and [Flow React config](https://flow.org/en/)
- [Travis CI](https://travis-ci.com/)
- [Github Pages](https://pages.github.com)

## Instructions
The `master` branch is protected, you can only modify it by creating a **Pull Request**. Every accepted and merged pull request triggers a new build on Travis CI and deploys the changes to Github Pages. See more CI details on the [repo Travis CI page](https://travis-ci.com/matepapp/cogito-notes).

Beside of Continous Integration you can deploy manually to Github Pages by running
```shell
yarn run deploy
```