# IPs Insights Endpoint Testing

## Task Description

Using programming platform, create a short automated test suite (10 test cases will be sufficient) for the following endpoint:

> URL: https://api.nordvpn.com/v1/helpers/ips/insights

Once requested this endpoint returns clients localization data over REST protocol.

## About the solution
This project is a solution based on [PactumJS](https://pactumjs.github.io/) and [Jest](https://jestjs.io/). It is designed to make it easier to create, manage and execute tests for API endpoints.
Maybe it's a bit overkill for the current task, but it's so handy.

## Requirements
- NodeJS >= 14

## Installation Instructions
To install the necessary dependencies, run the following command:

> npm install

## Test Execution Instructions
To run tests, use the following command:

> npm test

As output you will have the result in the terminal window, no extra reporters were connected.