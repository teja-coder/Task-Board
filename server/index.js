const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());

const PORT = 5500;

app.use(cors());

const todoItemsRoute = require("./Routes/todoItems");

mongoose
  .connect(
    "mongodb+srv://teja:teja@cluster0.rhusyzg.mongodb.net/todo?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", todoItemsRoute);

app.listen(PORT, () => {
  console.log("server connected");
});
