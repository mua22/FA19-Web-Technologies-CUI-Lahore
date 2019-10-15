const express = require("express");
const path = require("path");
// console.log(typeof express);
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.listen(5000, function() {
  console.log("Express Started on port 5000");
});
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {
  var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  console.log("Request Received from " + ip);
  res.send("<html><body><h1>Hello </h1></body></html>");
});

app.get("/haha/hi", function(req, res) {
  let students = ["Abdullah", "Hafsa", "Adeel"];
  return res.render("index", { message: "Im from node", students });
});
