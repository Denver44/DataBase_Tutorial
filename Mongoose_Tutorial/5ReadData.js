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

// ---------- READING DATA ---------------------
// --------------- BASIC-----------------
// const getDocument = async () => {
//   try {
//     // same as basic db.collectionname.find()
//     const result = await Tutorial.find();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getDocument();
// --------------- TYPE1-----------------
// const getDocument = async () => {
//   try {
//     const result = await Tutorial.find({ name: "Durgesh Rai" });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getDocument();

// --------------- TYPE2-----------------
// const getDocument = async () => {
//   try {
//     const result = await Tutorial.find({ name: "Durgesh Rai" }).select({
//       name: 1,
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getDocument();

// --------------- TYPE3-----------------
const getDocument = async () => {
  try {
    const result = await Tutorial.find({ name: "Durgesh Rai" })
      .select({
        name: 1,
      })
      .limit(1);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument();
