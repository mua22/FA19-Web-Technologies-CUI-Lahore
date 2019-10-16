const express = require("express");

const app = express();

app.listen(3000, () => console.log("started Serveron 3000"));

app.get("/", (req, res) => {
  console.log("Request Received");
  res.send("<h1>heloo h1 </h1> ");
});
app.get("/products/hello", (req, res) => {
  console.log("Request Received on products");
  res.send("<h1>heloo products </h1> ");
});
