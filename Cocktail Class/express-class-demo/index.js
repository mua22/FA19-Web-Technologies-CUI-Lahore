const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  //   res.send("Hello Dear Class");
  res.render("home");
});
app.get("/shirts", (req, res) => {
  res.render("shirts");
});
app.get("/trousers", (req, res) => {
  res.render("trousers");
});

app.listen("3000", () => {
  console.log("Server sterted at localhost:3000");
});
