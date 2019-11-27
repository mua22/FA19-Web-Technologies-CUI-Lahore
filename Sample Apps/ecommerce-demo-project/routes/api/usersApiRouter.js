const auth = require("../../middleware/auth");

const bcrypt = require("bcryptjs");
const _ = require("lodash");
const { User, validate } = require("../../models/user");

const express = require("express");
const router = express.Router();
const Joi = require("joi");
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});
// sign up process
router.post("/", async (req, res) => {
  // console.log(req.body);
  const { error } = validate(req.body);
  //validate a user request data
  if (error) return res.status(400).send(error.details[0].message);
  //check if a user is already registered
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");
  //valid user data
  user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "name", "email"]));
});

//login process
router.post("/login", async (req, res) => {
  const { error } = validateLoginRequest(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password.");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = user.generateAuthToken();
  res.send(token);
});

function validateLoginRequest(req) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(req, schema);
}
module.exports = router;
