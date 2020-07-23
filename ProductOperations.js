const ProductModel = require("./models/ProductModel");

const CreateProducts = async (title, price, tags) => {
  console.log("Trying to create a new Product");
  //Now here we create a new Product and keep in mind that we should follow the schema to add/create. So
  //First lets define the schema
  //The Schema basically is to check the validity.
  //So the simplest way the mongoose gives us that create an instance of the Schema and add through it.

  let product = new ProductModel();
  //It is now initiated with that schema. Now we will add up things and it simply will add in that table.
  product.title = title;
  product.price = price;
  product.tags = tags;
  //Now in order to save that data, we simply will use the command
  await product.save();
  //Await is used because it takes some time to save and we don't have to wait for it.
  return product;
  //We also try to return the product that was created to see what we get.
};

//In here we are just saying to our database that find all the instances from the database.
//So listProducts is a way we can use the select query.
const listProducts = async () => {
  let products = await ProductModel.find();
  //We will tell the model to fetch that data
  //The reason to use Model because it has the link of our document in the database.
  return products;
};

const delproducts = async (_id) => {
  let delpd = await ProductModel.findByIdAndDelete(_id);
  return delpd;
};

const UpdateProduct = async (index, title, price, tags) => {
  console.log("Trying to update your product Product");
  let product = await ProductModel.findById(index);
  //Rather than new Product to the model we say it to find that product with the given 'id'
  //As it finds that, it will update it by the given data
  product.title = title;
  product.price = price;
  product.tags = tags;
  await product.save();
  return product;
};

module.exports.CreateProducts = CreateProducts;
module.exports.UpdateProduct = UpdateProduct;
module.exports.listProducts = listProducts;
module.exports.delproducts = delproducts;
