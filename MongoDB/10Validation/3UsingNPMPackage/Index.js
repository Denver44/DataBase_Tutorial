// Using Npm Package for validation
// npm i validator

const validator = require("validator");
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

const Tutorial = new mongoose.model("NpmValidation", TutorialSchema);

const createDocumentCustomValidation = async () => {
  try {
    const tuts5 = new Tutorial({
      name: "Striver",
      age: 20,
      email: "d#",
      phone: 7412963820,
    });

    const result = await Tutorial.insertMany([tuts5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
createDocumentCustomValidation();
