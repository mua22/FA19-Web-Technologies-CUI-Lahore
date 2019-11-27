var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const {
  Product,
  validateProduct,
  productSchema
} = require("../models/ProductModel");
router.get("/products", async (req, res, next) => {
  const products = await Product.find();
  res.render("products/list", { products });
});
router.get("/products/create", (req, res, next) => {
  res.render("products/create");
});
router.post("/products/store", async (req, res, next) => {
  if (!req.body.name) res.redirect("/products/create");
  let newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect("/products");
});
router.get("/products/delete/:id", async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  await product.remove();
  res.redirect("/products");
});
router.get("/products/edit/:id", async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.render("products/edit", { product });
});
router.post("/products/update/:id", async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  res.redirect("/products");
});
router.get("/products/:id", async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  console.log(product);
  res.render("products/details", { product });
});

module.exports = router;
