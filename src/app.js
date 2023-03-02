const express = require("express");
const db = require("./utils/database");
const Todo = require("./models/todoModel");

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

app.get("/", (req, res) => {
  res.send("asdasd");
});

app.listen(PORT, () => {
  console.log("first");
});
