var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cors = require("cors");
var cookieParser = require("cookie-parser");

var winston = require("winston");

// require("express-async-errors");
const mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRouter = require("./routes/products");
var productsApiRouter = require("./routes/api/productsApiRouter");
var userApiRouter = require("./routes/api/usersApiRouter");
const config = require("config");
var app = express();
winston.handleExceptions(
  new winston.transports.Console({ colorize: true, prettyPrint: true }),
  new winston.transports.File({ filename: "uncaughtExceptions.log" })
);

process.on("unhandledRejection", ex => {
  throw ex;
});
winston.add(winston.transports.File, { filename: "logfile.log" });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/", productsRouter);
app.use("/api/products", productsApiRouter);
app.use("/api/users", userApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
mongoose
  .connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to Mongo ....");
    winston.info("Winston: Connected to Mongo ....");
  })
  .catch(error => console.log(error.message));
module.exports = app;
