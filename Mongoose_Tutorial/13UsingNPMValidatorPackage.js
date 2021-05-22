// Using Npm Package for validaton
// npm i validator

const mongoose = require("mongoose");
const validator = require("validator");

mongoose
  .connect("mongodb://localhost/PersonDetail", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // this are custom Blindy add this three.
    // There is one more when we connect to Atlas.
  })
  .then(() => {
    console.log("connection Successfull...");
  })
  .catch((err) => {
    console.log(err);
  });

const TutorialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (validator.isEmail(value)) {
        throw new Error("Email is Invalid");
      }
    },
  },
  phone: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Tutorial = new mongoose.model("DurgeshTutorial", TutorialSchema);

const createDocumentCustomValidation = async () => {
  try {
    const tuts5 = new Tutorial({
      name: "Strivefffr",
      age: 20,
      email: "d#",
      phone: 9687318788,
    });

    const result = await Tutorial.insertMany([tuts5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
createDocumentCustomValidation();
