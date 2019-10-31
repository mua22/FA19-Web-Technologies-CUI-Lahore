const express = require("express");
const app = express();
const productsController = require("./controllers/products");

app.use(express.static("public"));
app.set("view engine", "pug");
app.use("/", productsController);

app.listen(3000, () => {
  console.log("Server started");
});
