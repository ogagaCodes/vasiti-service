const { Sequelize } = require("sequelize");
const KEYS = require("../_helpers/keys");

const sequelize = new Sequelize(KEYS.db, KEYS.dbUser, KEYS.dbPassword, {
  host: KEYS.dbHost,
  dialect: "mysql",
  port: KEYS.dbPort,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.auth = require("../app/modules/auth/models/auth.model")(sequelize, Sequelize);
db.users = require("../app/modules/user/models/user.model")(sequelize, Sequelize);

// define relations
db.auth.hasMany(db.users,{foreignKey: 'id'});

module.exports = db;
