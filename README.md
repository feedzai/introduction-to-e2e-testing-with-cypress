# End to end tests in modern web applications

This projects aims to introduce developers (QA, Frontend, etc) to the concepts of end-to-end (E2E) tests and how these could be written in order to validate a web application on multiple fronts (backend and frontend services) and fully integrated against a real environment.

We will create tests for two different E2E layers:

1. API - We will use [EVA](https://api.eva.pingutil.com), a service that is available in the internet and allow us to verify if an e-mail has a valid syntax.
2. UI - We will use a simple todo-list application that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Bootstrap & Requirements

### Install NVM (Node Version Manager)

[Linux / MAC](https://heynode.com/tutorial/install-nodejs-locally-nvm)

[Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)

### Pull the repo that contains the project

```sh
git pull https://github.com/feedzai/introduction-to-e2e-testing-with-cypress.git
cd introduction-to-e2e-testing-with-cypress
```

### Install node and set it to be used

```sh
nvm nvm install 14.19
```

```sh
nvm use 14.19
```

### Run npm install to install project dependencies

```sh
npm install
```

### Launch the app

```sh
npm run start
```

Open [the app](http://localhost:3000) to view it in your browser.

### Launch the Cypress UI in a different terminal window

```sh
npm run test
```

Use an IDE of your preference (we like VSCode, but you do you) to modify those files during the workshop in order to complete the needed tasks.

## Setup your own Firebase database

There's already a database available for you to try out this simple demo app. However, if you still want to setup your own, follow the steps in [this video](https://youtu.be/HgfA4W_VjmI) order to do so.

By following the steps on this section of the tutorial, you'll arrive at a point where Firebase will present you an object with your app's token configurations. Copy those, and replace the one's that are on the `src/firebase.js` file.

```js
const database = fb.initializeApp({
  apiKey: "replace-here",
  authDomain: "replace-here",
  databaseURL: "replace-here",
  projectId: "replace-here",
  storageBucket: "replace-here",
  messagingSenderId: "replace-here",
  appId: "replace-here",
});
```
