const mongoose = require("mongoose");

//Now lets create its schema

const productsSchema = mongoose.Schema({
  title: String,
  price: Number,
  tags: [String],
  slug: { type: String, lowercase: true },
});

//Creating Model of the Database.

const ProductModel = mongoose.model("Testing", productsSchema);
//The first parameter is the Table Name where it is to be stored while second parameter is the schema of the model
module.exports = ProductModel;
//We have exported it so that the Model can be used anywhere in the program.
