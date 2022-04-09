# End to end tests in modern web applications

This projects aims to introduce the students to the concepts of E2E tests and how they could be written in order to validate a web application, by testing all the different components (backend and frontend services) fully integrated against a real environment.

We will create tests for two different E2E layers: API & UI.

For the UI layer we will use a simple application that was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For the API layer we will use [EVA](https://api.eva.pingutil.com) a service that is available in the internet and allow us to verify if an e-mail has a valid syntax.
  

## Project Bootstrap & Requirements

### Install NVM (Node Version Manager)
[Linux / MAC](https://heynode.com/tutorial/install-nodejs-locally-nvm)

[Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)

### Pull the repo that contains the project

    git pull https://github.com/feedzai/introduction-to-e2e-testing-with-cypress.git
    cd introduction-to-e2e-testing-with-cypress

### Install node version 14.9 and set it to be used
    nvm nvm install 14.19
    nvm use 14.19

### Run npm install to install project dependencies
    npm install

### Launch the app

    npm run start

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  

### Launch the Cypress IDE in a different terminal window

    ./node_modules/.bin/cypress open

From where you are able to run the tests inside 

    ./cypress/integration/api
    ./cypress/integration/ui

Use an IDE of your preference to modify those files during the workshop in order to complete the needed tasks.
