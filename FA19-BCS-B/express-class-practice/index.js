const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "pug");
var students = ["abc", "xyz"];
app.get("/", (req, res) => {
  res.render("homepage", { students });
});

app.listen(5000, function() {
  console.log("Started");
});
