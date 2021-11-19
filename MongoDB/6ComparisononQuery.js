const getDocument = async () => {
  try {
    const result = await Tutorial.find({
      age: { $nin: 24 },
    }).select({
      name: 1,
      age: 1,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument();
// 1 Comparison {$gt : value} greater than
// 2 Comparison {$lt : value} less than
// 3 Comparison {$gte : value} greater than equal
// 4 Comparison {$lte : value} less than equal
// 5 Comparison {$in : [value1,value2]} matches any values in array eg { age: {$in : [24,25,26,,27,28]} }
// 6 Comparison {$nin : value} not in the
