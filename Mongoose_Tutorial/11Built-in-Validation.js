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

const TutorialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // lowercase: true, // So now everything converted in lowercase
    // uppercase: true, // So now everything converted in UPPERCASE
    // trim: true, //Remove the Unwanted Spaces.
    minlength: 2,
    maxlength: 20,
  },
  age: {
    type: Number,
    enum: [21, 20, 28, 29], // this enumn the value in the array must be int that field.
  },
  phone: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Tutorial = new mongoose.model("DurgeshTutorial", TutorialSchema);

const createDocumentWithValidation = async () => {
  try {
    const tuts5 = new Tutorial({
      name: "Durgesh Rai",
      age: 20,
      phone: 9687318788,
    });

    const result = await Tutorial.insertMany([tuts5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
createDocumentWithValidation();
