const express = require("express");

const app = express();
app.use(express.static("public"));
app.set("view engine", "pug");
app.listen(5000, () => console.log("Server Started on Port 5000"));

app.get("/", (req, res) => {
  console.log("Request received");
  res.send("<h1>Dummy text something</h1>");
});
app.get("/api/students", (req, res) => {
  console.log("Request received");
  res.send(["Noman", "Ali"]);
});
app.get("/students", (req, res) => {
  res.render("index", { students: ["shahoor", "bilal", "obaid"] });
});
