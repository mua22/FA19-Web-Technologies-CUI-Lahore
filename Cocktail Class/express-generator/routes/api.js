var express = require("express");
var router = express.Router();
var students = ["Ali", "Noman"];
/* GET home page. */
router.get("/students", function(req, res, next) {
  res.send(students);
});

module.exports = router;
