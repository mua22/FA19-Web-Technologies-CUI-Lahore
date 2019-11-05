const express = require("express");
const app = express.Router();
let products = ["pen", "pensil", "rubber"];
app.get("/api/products", (req, res) => {
  res.send(products);
});
app.get("/api/products/:id", (req, res) => {
  console.log(req.params.id);
  res.send(products[req.params.id]);
});
app.delete("/api/products/:id", (req, res) => {
  products.splice(req.params.id, 1);
  res.send(products);
});
app.post("/api/products", (req, res) => {
  console.log("request handled in post");
  products.push(req.body.name);
  console.log(req.body);
  res.send(products);
});
app.patch("/api/products/:id", (req, res) => {
  products[req.params.id] = req.body.name;
  res.send(products);
});

module.exports = app;
