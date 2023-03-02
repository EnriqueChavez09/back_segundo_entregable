const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Status = {
  COMPLETED: 'Completada',
  PENDING: 'Pendiente',
};

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
  status: {
    type: DataTypes.ENUM(Object.values(Status)),
    defaultValue: Status.PENDING,
    allowNull:false
  }
});

module.exports = Todo;
