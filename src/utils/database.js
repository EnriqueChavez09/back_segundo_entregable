const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "postgres://postgres:secretsecret@localhost:5432/segundo_entregable"
);

module.exports = db;
