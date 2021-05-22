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

const getDocument = async () => {
  try {
    const result = await Tutorial.find().sort({ age: 1 });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------This is Update Function
// 1.It take a object_id and Upadte the element
// 2. we have to use $set for upadting
// 3. here we have done _id destructing.
// const doUpdate = async (_id) => {
//   try {
//     const result = await Tutorial.updateOne(
//       { _id },
//       {
//         $set: {
//           name: "Durgesh Full stack Developer",
//         },
//       }
//     );
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// doUpdate("5fb26d517ef19b0d5cec07e7");

//------------------------findByIdandUpdate ---------------------------
// this upadte and show the new one here only.
const doUpdate = async (_id) => {
  try {
    const result = await Tutorial.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "Durgesh Devops Engineer",
        },
      },
      {
        new: true, // this help us to show the new changes
        useFindAndModify: false, // this is mandaotry.
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doUpdate("5fb26d517ef19b0d5cec07e7");

// getDocument();
