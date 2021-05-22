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

// countDocuments() is used to count the number of docu,ent.
// sort() if we writ like this then it will short on creation time.
//  const result = await Tutorial.find({}).sort({ age: 1 });  asecnding order 1.
//  const result = await Tutorial.find({}).sort({ age: 1 });  descending order -1.
const getDocument = async () => {
  try {
    const result = await Tutorial.find().sort({ age: 1 });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument();
