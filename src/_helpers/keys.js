const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  dbHost: process.env.HOST,
  dbPassword: process.env.PASSWORD,
  dbUser: process.env.USER,
  dbPort: process.env.DBPORT,
  db: process.env.DATABASE,
  PORT: process.env.PORT,
};
