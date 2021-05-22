const mongoose = require("mongoose");

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
  age: {
    type: Number,
    // this value is the value which we going to insert in age.
    validate(value) {
      if (value < 0) {
        throw new Error("Age cannot be Negative");
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
      name: " kk ",
      age: 20,
      phone: 9687318788,
    });

    const result = await Tutorial.insertMany([tuts5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
createDocumentCustomValidation();
