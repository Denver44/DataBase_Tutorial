// Inserting data in Mongo db

// Use insertOne
db.items.insertOne({
  name: "Iphone se 2",
  price: 45000,
  ratings: 4.2,
  qty: 1025,
  sold: 989,
});

// Use insertMany but ana array of BSON [{},{}]
db.items.insertMany([
  {
    name: "Iphone 7",
    price: 55000,
    ratings: 4.2,
    qty: 100825,
    sold: 90809,
  },
  {
    name: "Iphone X",
    price: 75000,
    ratings: 4.2,
    qty: 100025,
    sold: 90089,
  },
  {
    name: "Iphone 6s",
    price: 25000,
    ratings: 4.5,
    qty: 10025,
    sold: 9089,
  },
]);
