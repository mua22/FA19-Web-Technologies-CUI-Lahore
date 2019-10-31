const express = require("express");
const app = express();
const homecontroller = require("./controllers/homepage");
app.use(express.static("public"));
app.set("view engine", "pug");
app.use("/", homecontroller);
const port = 3000;

app.listen(port, function() {
  console.log(`Listening on Port 3000....`);
});
