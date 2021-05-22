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

// ---------- CREATING DOCUMENT OR INSERT--------------
// const tuts = new Tutorial({
//   name: "Durgesh Rai",
//   age: 21,
//   phone: 7096938102,
// });

// tuts.save(); // it returns a Promise.
// ---------------------------- MORDEN WAY  TO INSERT A DOCUMENT ----------------
// use async await as it is better than Promise.
const createDocument = async () => {
  try {
    const tuts = new Tutorial({
      name: "Papa React",
      age: 25,
      phone: +4756924,
    });

    const result = await tuts.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
createDocument();
