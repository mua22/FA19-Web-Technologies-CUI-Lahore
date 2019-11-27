const mongoose = require("mongoose");
const Joi = require("joi");
const productSchema = mongoose.Schema({
  name: String,
  price: String
});
const Product = mongoose.model("Product", productSchema);
const validateProduct = product => {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    price: Joi.number()
  };
  return Joi.validate(product, schema);
};
module.exports = {
  Product,
  validateProduct,
  productSchema
};
