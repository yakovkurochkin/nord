# NodeJS UI tests

## Task Description

Using NodeJS, create a script that: 

- navigates to "https://nordcheckout.com/products", THEN
- click button "Buy NordVPN", THEN
- click "log In" link on top right corner, THEN
- verify that url contains "login" , THEN
- go back, THEN
- select 1-year-plan, THEN
- click 'continue to payment', THEN
- verify that plan price matches the selected one

## About the solution
It is based on [Playwright](https://playwright.dev/) because it is a popular UI testing tool that covers our needs. The test only runs against the Chrome browser.

## Requirements

- NodeJS >= 14

## Installation

To install the necessary dependencies, run the following command:

> npm install

## Tests execution

To run tests, use the following command:

> npm test

By default, the project uses an HTML reporter. After running the tests, you can view the report by running:

> npx playwright show-report