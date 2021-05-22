// Deleting data in Mongo db

// use Ekart
db.items.find({ price: 75000 });

db.items.deleteOne({ price: 75000 });
db.items.deleteMany({ price: { $gt: 45000 } });

// If we dont pass any qury it will clear all the records from db
db.items.deleteMany({});
