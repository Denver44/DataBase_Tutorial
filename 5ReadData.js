//  READING DATA
//  BASIC
const getDocument = async () => {
  try {
    const result = await Tutorial.find();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument();

//  TYPE1
const getDocument = async () => {
  try {
    const result = await Tutorial.find({ name: "Denver" });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument();

// TYPE2
const getDocument = async () => {
  try {
    const result = await Tutorial.find({ name: "Denver" }).select({
      name: 1,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument();

// TYPE3
const getDocument = async () => {
  try {
    const result = await Tutorial.find({ name: "Denver" })
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
