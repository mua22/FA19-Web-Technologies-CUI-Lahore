var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("homepage", { msg: "Hello Class" });
});
router.get("/hobby", function(req, res, next) {
  res.render("hobby");
});

module.exports = router;
