// Logical Operator

//1. $and Operator
Tutorial.find({
  $and: [{ phone: "7096938102" }, { age: "19" }],
});

//2. $or Operator
Tutorial.find({
  $or: [{ phone: "7096938102" }, { age: "32" }, { age: "26" }, { age: "32" }],
});

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
