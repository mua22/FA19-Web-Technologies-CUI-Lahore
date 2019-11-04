const express = require("express");
const router = express.Router();

let products = ["IPhone", "Samsung"];

router.get("/", (req, res) => {
  res.send(products);
});
router.post("/", (req, res) => {
  console.log(req.body);
  products.push(req.body.name);
  res.send(products);
});

module.exports = router;
