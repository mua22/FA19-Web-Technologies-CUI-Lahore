var express = require("express");
const mongoose = require("mongoose");
const auth = require("../../middleware/auth");
const admin = require("../../middleware/admin");
const {
  Product,
  validateProduct,
  productSchema
} = require("../../models/ProductModel");
var router = express.Router();
//get all products
router.get("/", auth, admin, async (req, res) => {
  let products = await Product.find()
    .select({ name: 1 })
    .sort({ name: 1 });
  // .limit(3)
  return res.send(products);
});
//get single product by id
router.get("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) return res.status(400).send("Cant Find Product with given id");
  return res.send(product);
});
//delete single product
router.delete("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) return res.status(400).send("Cant Find Product with given id");
  await product.remove();
  return res.send(product);
});

//create new product
router.post("/", async (req, res) => {
  let { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let product = new Product(req.body);
  await product.save();
  res.send(product);
});
//update single product by id
router.patch("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) return res.status(400).send("Cant Find Product with given id");
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  return res.send(product);
});
module.exports = router;
