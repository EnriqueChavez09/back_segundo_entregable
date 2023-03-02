const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Todo = db.define("todos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Todo;
