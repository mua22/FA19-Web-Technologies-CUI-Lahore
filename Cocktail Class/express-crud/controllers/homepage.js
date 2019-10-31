const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.send("Home Page");
  res.render("home");
});
router.get("/contact", (req, res) => {
  res.render("contact", { msg: "My Message" });
});
router.get("/products", (req, res) => {
  res.render("products", { products: ["Laptop", "IPhone"] });
});

module.exports = router;
