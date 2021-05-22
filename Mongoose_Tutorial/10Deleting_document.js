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

// const getDocument = async () => {
//   try {
//     const result = await Tutorial.find().sort({ age: 1 });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getDocument();
//------------------------Delete Document ---------------------------
// this upadte and show the new one here only.
// { _id } if key and value are same then no need to write double times.
// const doDelete = async (_id) => {
//   try {
//     const result = await Tutorial.deleteOne({ _id }); // it return a Promise.
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// doDelete("5fb26d517ef19b0d5cec07e7");

//------------------------Delete Document  and Print which One is deleted---------------------------
const doUpdateandDelete = async (_id) => {
  try {
    const result = await Tutorial.findByIdAndDelete({ _id });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
doUpdateandDelete("5fb2671d0b9ea5278cbc59df");
