// Updating data in Mongo db

// it will upadte only first which got match
// db.collectionname.updateOne({})

// The $set dollar help us to update the value.

db.items.updateOne({ name: "Iphone se 2" }, { $set: { price: 5 } });

db.items.updateMany({ name: "Iphone 6s" }, { $set: { ratings: 1, price: 2 } });
