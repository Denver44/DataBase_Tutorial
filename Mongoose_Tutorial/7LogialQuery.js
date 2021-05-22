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
  },
  age: Number,
  phone: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Tutorial = new mongoose.model("DurgeshTutorial", TutorialSchema);
// ----- Logical Operator.-------------------------
//1. $and Opertor-----------------------------------------------
//  Tutorial.find({
//    $and: [{ phone: "7096938102" }, { age: "19" }],
//  });
//2. $or Operator------------------------------------------------
// Tutorial.find({
//   $or: [{ phone: "7096938102" }, { age: "32" }, { age: "26" }, { age: "32" }],
// });
const getDocument = async () => {
  try {
    const result = await Tutorial.find({
      $and: [{ phone: "7096938102" }, { age: "19" }],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument();
