const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const {
  CreateProducts,
  listProducts,
  delproducts,
  UpdateProduct,
} = require("./ProductOperations");

mongoose
  .connect("mongodb://localhost/1stDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true, //These are some necessary options.
  })
  .then(async () => {
    console.log("Successfully Connected to your Database");
    //After Creating Connection, lets create an object. So call that function.
    // let prod = await CreateProducts("Toshiba", 500, [
    //   "Easy and Durable",
    //   "Fun to Use",
    // ]);
    // console.log(prod);
    //We have used a variable because this statement is returning a value

    //Lets just have some data to fetch

    //let showprods = await listProducts();
    //The basic code for showing the instances is just 'let products = await ProductModel.find();'
    //And we have the product in our hand. But we can also use the external Function too.
    //console.log(showprods);

    //As the find function is just of one line and similar is the delete function of a single line.
    // let deletedproduct = await delproducts(`5f18a5716f33710f5099b8ee`);
    // console.log(deletedproduct);

    //In order to update a specific record, we simply will use the same syntax of Creation but
    //we will give our model the id and it will find that and update it with the data given.
    let updatedprod = await UpdateProduct(
      "5f18aa21e7951337d43ea601",
      "Toshiba Laptop",
      "550",
      ["Best Selling", "New and Innovative"]
    );
    console.log(updatedprod);
  })
  .catch((err) => {
    console.log(`Error Connecting to the Database.`);
    console.log(err);
  });
//In order to connect to the database, firstly we give the connection string to the as a parameter. And it is
//simply a database that is on local machine and give its name.
//Actually this connection procedure returns you a Promise. So we act upon it as a Promise.

//If the name provided in the connection string is not present as a Database,
//it will create a new Database with the name provided in the connection parameter.

//Lets create the Schema of this database that has some products in it in a separate file.

console.clear();

app.listen(8080);
