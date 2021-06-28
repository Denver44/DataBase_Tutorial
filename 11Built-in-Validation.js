const TutorialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true, // So now everything converted in lowercase
    uppercase: true, // So now everything converted in UPPERCASE
    trim: true, //Remove the Unwanted Spaces.
    minlength: 2,
    maxlength: 20,
  },
  age: {
    type: Number,
    enum: [21, 20, 28, 29], // this enum the value in the array must be int that field.
  },
  phone: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Tutorial = new mongoose.model("ValidationTutorial", TutorialSchema);

const createDocumentWithValidation = async () => {
  try {
    const tuts5 = new Tutorial({
      name: "Denver",
      age: 20,
      phone: 7894561137,
    });

    const result = await Tutorial.insertMany([tuts5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
createDocumentWithValidation();
