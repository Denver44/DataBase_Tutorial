const getDocument = async () => {
  try {
    const result = await Tutorial.find().sort({ age: 1 });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument();

// Delete Document
// this update and show the new one here only.
// { _id } if key and value are same then no need to write double times.

const doDelete = async (_id) => {
  try {
    const result = await Tutorial.deleteOne({ _id }); // it return a Promise.
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
doDelete("5fb26d517ef19b0d5cec07e7");

// Delete Document  and Print which One is deleted
const doUpDateAndDelete = async (_id) => {
  try {
    const result = await Tutorial.findByIdAndDelete({ _id });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
doUpDateAndDelete("5fb2671d0b9ea5278cbc59df");
