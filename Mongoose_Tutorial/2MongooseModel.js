const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/PersonDetail", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection Successfull...");
  })
  .catch((err) => {
    console.log(err);
  });

//--------------------------- SCHEMA HOW OUR COLLECTIONS OBJECT WILL LOOK LIKE---------
//7. A Mongoose Schema defines the structures of the document, default values,validators,etc.
//8. This actually tells that which type of data you are going to store.
const TutorialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  phone: Number,
  date: {
    type: Date, // and its default type.
    default: Date.now, // we can set default value
  },
});

// ---------------------- COLLECTION  CREATION --------------------------------------
//9. A Mongoose Model is a wrapper on the Mongoose Schema.
//10. A mongoose schema defines the structures of the document,
//11. default values,validators,etc,.. whereas a mongoose model provides an interface to the database for creating, querying , updating , deleting records,etc..
// collection Name should be Singular and First letter Must be Capital Follow Pascal
// The Tutorial is a class.
const Tutorial = new mongoose.model("DurgeshTutorial", TutorialSchema);
