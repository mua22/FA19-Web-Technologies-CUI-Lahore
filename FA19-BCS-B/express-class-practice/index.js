const express = require("express");
const app = express();
const productsRouter = require("./controllers/products");
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "pug");
app.use("/api/products", productsRouter);

var students = ["abc", "xyz"];

app.get("/", (req, res) => {
  res.render("homepage", { students });
});

app.listen(5000, function() {
  console.log("Started");
});
