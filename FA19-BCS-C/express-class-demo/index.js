const express = require("express");
const app = express();
const products = require("./routes/products");
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.json());
app.use("/", products);

app.get("/", (req, res) => {
  res.render("home");
});
app.listen(3000, () => console.log("server started"));
