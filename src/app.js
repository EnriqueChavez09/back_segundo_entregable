const express = require("express");
const db = require("./utils/database");
const Todo = require("./models/todoModel");
const todoRoutes = require("./routes/todoRoutes");

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Conexión de base de datos OK");
  })
  .catch((e) => {
    console.log(e);
  });

db.sync()
  .then(() => {
    console.log("Base de datos sincronizado");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.use(express.json());

app.use(todoRoutes);

app.listen(PORT, () => {});
