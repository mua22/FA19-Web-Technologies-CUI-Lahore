var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
/* GET home page. */
router.get("/hello", function(req, res, next) {
  res.render("helloworld", { message: "Hello dear Class How Are you" });
});

module.exports = router;
