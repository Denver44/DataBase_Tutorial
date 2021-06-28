// ---------------Mongoose Setup -------------------

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/PersonDetail", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection done...");
  })
  .catch((err) => {
    console.log(err);
  });

//1.First install npm install Mongoose.
//2.Every time we have to require the mongoose lib.
//3.This is the syntax for connecting the mongoose with database it return a PROMISE.
//4.The second argument which is a object it is mandatory.
//5.As we are not working with Atlas the remote version so we just need only two key and value.
//6.Connect to database if not then create a new database.
//7.here we have to give the path where is our mongodb collection  mongodb://localhost/dataBaseName"
