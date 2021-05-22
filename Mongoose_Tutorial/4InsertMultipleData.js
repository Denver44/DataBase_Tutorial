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

// ---------- INSERTING MULTIPLE DOCUMENT AT A TIME--------------
// use insertMany([]) it takes an array of all the playlist name under it.
// insertMany is function of Tutorial.

const createDocument = async () => {
  try {
    const tuts1 = new Tutorial({
      name: "Papa Mern",
      age: 26,
      phone: +7756924,
    });
    const tuts2 = new Tutorial({
      name: "Papa Redux",
      age: 32,
      phone: +5156924,
    });
    const tuts3 = new Tutorial({
      name: "Clever Qazi",
      age: 24,
      phone: +7156924,
    });

    const result = await Tutorial.insertMany([tuts1, tuts2, tuts3]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
createDocument();
