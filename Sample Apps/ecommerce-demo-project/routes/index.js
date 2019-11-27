var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
  // res.send("indexwow");
});
/* GET Contact page. */
router.get("/contact", function(req, res, next) {
  res.render("pages/contact");
});

module.exports = router;
