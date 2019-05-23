# Comparing Cypress and Protractor tests on small Angular project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3 and subsequently built into this app by the AAA team.

## Setup
Clone with project, then change into the project directory and run `npm install`. This will take a while and will install all Angular and Cypress related dependencies on your machine.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You can use this to examine the page or do exploratory testing.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). *It is important that the development server is not running* as Protractor will want to start its own version to run the tests against. 

## Running tests with Cypress

Run `ng serve` to start the development server (cypress needs a running server to work against, unlike Protractor which starts its own).
From the same directory where you started the develpoment server (you'll need a second command/git-bash window), run `npx cypress open`. This will start the Cypress test runner and will show a list of tests (well, 2 for now). Click on one of them to run that suite of tests. A separate window will open where there will be a browser preview and you can watch the tests run and the test results come in.

## Further help

Poke @millard for more information or any assistance you may need.

# Project explanations

The purpose is to show both Cypress and Protractor tests on a small project so that we can talk about (dis)advantages of each.
