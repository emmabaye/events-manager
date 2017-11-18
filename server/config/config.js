 require('dotenv').config();

 module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "database_development",
    "host": process.env.HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "database_test",
    "host": process.env.HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "HEROKU_POSTGRESQL_GRAY_URL",
  }
}