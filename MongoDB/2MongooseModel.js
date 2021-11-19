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

const Tutorial = new mongoose.model("DenverTutorial", TutorialSchema);

// -  A Mongoose Schema defines the structures of the document, default values,validators,etc.
// -  This actually tells that which type of data you are going to store.
// -  A Mongoose Model is a wrapper on the Mongoose Schema.
// -  A mongoose schema defines the structures of the document,
// -  default values,validators,etc,.. whereas a mongoose model provides an interface to the database for creating, querying , updating , deleting records,etc..
// -  collection Name should be Singular and First letter Must be Capital Follow Pascal
//-  The Tutorial is a class.
