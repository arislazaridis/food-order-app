const express = require("express");
const mongoose = require("mongoose");
const Product = require("../server/models/product");
var cors = require("cors");
require("dotenv").config();
const router = new express.Router();

const app = express();
app.use(express.json());
// app.use(cors());

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

router.options("/productslist", cors());

app.get("/productslist", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  await Product.find({}, (err, result) => {
    console.log("products from db: ", result);

    res.send(result);
  });
});

app.post("/products", async (req, res) => {
  try {
    console.log("req.body: ", req.body);
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      qty: req.body.qty,
      image: req.body.image,
    });
    await Product.create(newProduct);
    res.send("Product added");
    // res.send(newProduct);
  } catch (err) {
    console.log("error: ", err);
  }
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
