# Repo with test task for browserstack

This project is an automated test suite using WebdriverIO for testing mobile web applications on different devices, such as Google Pixel and Xiaomi. The tests are written using Mocha as the test framework and Faker.js for generating random test data.

## Summary

This project includes test automation scripts for the following functionalities:
- User signup
- User login
- Swipe actions

The tests are configured to run on different devices.

## Requirements

To run this project, you will need the following installed on your machine:
- Node.js
- NPM

## Dependencies

The project uses the following key packages:
- WebdriverIO (`@wdio/cli`, `@wdio/local-runner`, `@wdio/mocha-framework`, `@wdio/spec-reporter`)
- Faker.js (for generating test data)

You can find the full list of dependencies in the `package.json` file.

## Installation

To install the necessary dependencies, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ArtemPerehonchuk/rentzila-playwright-tests.git
   ````

2. Navigate into the project directory:
  ```bash
  cd rentzila-playwright-tests
  ```

3. Install the dependencies:
  ```bash
  npm install
  ```

## Running Tests
You can run the tests using the following npm scripts:

1. To run all tests on the Google Pixel device:

  ```bash
  npm run test:all:pixel
  ```

2. To run all tests on the Xiaomi device:
  ```bash
  npm run test:all:xiaomi
  ```

3. To run specific tests:

- For signup tests:
  ```bash
  npm run test:signup
  ````

- For login tests:
  ```bash
  npm run test:login
  ````

- For login tests:
  ```bash
  npm run test:swipe
  ````