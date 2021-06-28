// OLD WAY TO CREATING DOCUMENT OR INSERT
const tuts = new Tutorial({
  name: "Durgesh Rai",
  age: 21,
  phone: 7096938102,
});

tuts.save(); // it returns a Promise.

//  MODERN WAY  TO INSERT A DOCUMENT
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
// use async await as it is better than Promise.
