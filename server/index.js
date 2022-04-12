const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = 3001;
const uri =
  "mongodb+srv://admin:admin@cluster0.duarj.mongodb.net/food-orders?retryWrites=true&w=majority";
// process.env.MONGODB_CONNECTION_STRING;

//connection with mongoDb
mongoose.connect(uri, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDb");
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDb database connection established successfully");
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
