const express = require("express");
const mongoose = require("mongoose");
const Product = require("../server/models/product");
const User = require("../server/models/user");
const cors = require("cors");
require("dotenv").config();
const router = new express.Router();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const port = 3001;
const uri = process.env.MONGODB_CONNECTION_STRING;

// Connection with MongoDB
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Products
router.options("/productslist", cors());

app.get("/productslist", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const products = await Product.find({});
    console.log("Products from DB: ", products);
    res.send(products);
  } catch (err) {
    console.error("Error retrieving products from DB: ", err);
    res.status(500).send("Internal Server Error");
  }
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
    await newProduct.save();
    res.send("Product added");
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

// Users
router.options("/userslist", cors());

app.get("/userslist", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  try {
    const users = await User.find({});
    console.log("Users from DB: ", users);
    res.send(users);
  } catch (err) {
    console.error("Error retrieving users from DB: ", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/user", async (req, res) => {
  try {
    console.log("req.body: ", req.body);
    const newUser = new User({
      name: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      gender: req.body.gender,
      phone: req.body.phone,
    });
    await newUser.save();
    res.send("User added");
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
