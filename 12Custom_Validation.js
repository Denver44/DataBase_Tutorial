const TutorialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    validate(value) {
      // this value is the value which we going to insert in age.
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

const Tutorial = new mongoose.model("CustomValidation", TutorialSchema);

const createDocumentCustomValidation = async () => {
  try {
    const tuts5 = new Tutorial({
      name: "Kim",
      age: 20,
      phone: 7894566153,
    });

    const result = await Tutorial.insertMany([tuts5]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
createDocumentCustomValidation();
