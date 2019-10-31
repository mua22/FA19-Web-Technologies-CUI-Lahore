const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("homepage", { title: "Pug Title" });
});
router.get("/products", (req, res) => {
  res.render("products");
});
router.get("/sales", (req, res) => {
  res.render("sales");
});
module.exports = router;
