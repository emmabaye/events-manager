# Events-Manager

[![Build Status](https://travis-ci.org/emmabaye/events-manager.svg?branch=development)](https://travis-ci.org/emmabaye/events-manager)
[![Coverage Status](https://coveralls.io/repos/github/emmabaye/events-manager/badge.svg?branch=development)](https://coveralls.io/github/emmabaye/events-manager?branch=development)
[![Maintainability](https://api.codeclimate.com/v1/badges/d2f4089952b77ab60b97/maintainability)](https://codeclimate.com/github/emmabaye/events-manager/maintainability)
[![codecov](https://codecov.io/gh/emmabaye/events-manager/branch/development/graph/badge.svg)](https://codecov.io/gh/emmabaye/events-manager)

Application for managing event centers. This app will help you accept applications
to use your center/facilities, and will either decline events when the proposed day
is already taken, or suggest an available day

Frontend static pages live at  https://emmabaye.github.io/events-manager/template/index.htm <br/>
Live at https://events-manager-abaye.herokuapp.com <br/>
API docs at https://events-manager-abaye.herokuapp.com/api-docs/

## Features

- User signup and signin pages
- A page where an authenticated user can add a new event
- A page, section or view where an authenticated user can Modify the event he/she added
- A page, section or view where an authenticated user can Delete the event he/she added
- A page where an admin can add a new center
- A page, section or view where an admin can modify the details of a center
- A page showing the details of a center and the events slated for that center

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This applications runs on Windows, MacOS and Linux operating systems. You need to have the following installed to run this application.

- Nodejs >8.x.x
- PostgreSQL v9.6.x Database

### Installation

```bash
# Clone this repository in your terminal
git clone https://github.com/emmabaye/events-manager.git my-project

# Change directory
cd my-project

# Populate environment variables
npm install

```

Rename `sample.env` file with to `.env` and populate it with appropriate environment variable values, then proceed to the next step

```
# Migrate database models to postgreSQL database
npm run migrate

# Start application in development mode
npm run start-dev

# If you want to build for production
npm run build-server && npm run build-client
# then start application in production mode
npm run start
```

## Running the tests and coverage

```bash
 # Run server-side tests
 npm run test

 # Run client-side tests
 npm run test-client

 # Run client-side tests in watch mode
 npm run test-client-watch
```

### Break down into end to end tests

This application uses selenium and nightwatch.js for end-to-end tests. Therefore, you need to have Java installed on your operating system

```bash
# Setup end-to-end test requirements once
 npm run e2e

 # Run end-to-end tests
 npm run test-e2e
```

### Coding style tests

This application uses ESLint to lint ES6 code.

```bash
#Lint code
npm run lint
```

## Deployment

The scripts in package.json are setup for ease of deployment on Heroku or any Nodejs hosting provider. Follow this tutorial if you need help, https://devcenter.heroku.com/articles/deploying-nodejs

## Built With

- [Nodejs](https://nodejs.org/en/) - JavaScript server-side engine
- [Expressjs](https://expressjs.com/) - Web framework
- [Sequelize](http://docs.sequelizejs.com/) - Object Relational Mapper
- [PostgreSQL](https://www.postgresql.org/) - Database
- [React](https://reactjs.org/) - View library
- [Redux](https://redux.js.org/) - Used for state management in the client-side
- [Bootstrap 4](https://v4-alpha.getbootstrap.com/) - CSS framework
- [Babel](https://babeljs.io/) - ES6 Transpiler
- [ESlint](https://eslint.org/) - ES6 linting
- [Mocha](https://mochajs.org/) - JavaScript testing framework
- [Supertest](https://v4-alpha.getbootstrap.com/) - For HTTP assertions in tests
- [Nightwatch](http://nightwatchjs.org/) - End-to-End (E2E) testing solution for browser based apps and websites

## Contributing

Feel free to contribute to this repository. Your pull requests are welcomed.

## Authors

- **Emmanuel Abaye** - [emmabaye](https://github.com/emmabaye)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to everyone that assisted me in building this application.
