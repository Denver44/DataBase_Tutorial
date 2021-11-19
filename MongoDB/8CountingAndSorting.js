const getDocument = async () => {
  try {
    const result = await Tutorial.find().sort({ age: 1 });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument();
// countDocuments() is used to count the number of document.
// sort() if we writ like this then it will short on creation time.
//  const result = await Tutorial.find({}).sort({ age: 1 });  asc order 1.
//  const result = await Tutorial.find({}).sort({ age: -1 });  desc order -1.
