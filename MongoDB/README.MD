## Basic CRUD OPERATION IN MONGODB

**Inserting data in Mongo db**

**Use insertOne**

```
db.items.insertOne({
  name: "Iphone se 2",
  price: 45000,
  ratings: 4.2,
  qty: 1025,
  sold: 989,
});
```

**Use insertMany but an array of BSON [{},{}]**

```
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

```

**To find data in Mongo db**

```
db.items.find({ price: 75000 });
db.items.find({ price: { $gte: 5000 } }); //The price above 5000 it will give all the items gte means greater than equal to 5000.
db.items.find({ price: { $gt: 5000 } }); //The price above 5000 it will give all the items gte means greater than 5000.
```


**Conditions**

```

db.items.find({ price: { $gt: 5000 }, sold: { $gt: 10000 } });
db.items.find({ $or: [{ price: { $gt: 5000 } }, { qty: { $lt: 10000 } }] });
db.items.find({ price: { $gt: 5000 } }, { rating: 1 }); // This only give the object id and we can also pass as many args
db.items.find({ price: 75000 }, { price: 1 }); // If we write like this we only get the object id and the prices only
db.items.find({ price: 75000 }, { id: 0, price: 1 }); // Now we only get the price.
db.items.find({ price: 75000 }).pretty().limit(1); //So we get only one data whose price is 75000
db.items.findOne({ price: 75000 });//we get only one data whose price is 75000 but pretty() is not available.
db.items.find({ price: 75000 }).pretty().limit(1).skip(1); //It will skip(1) and show only one whose price 75000 of two are same then it will second one.


```

**Updating data in Mongo db**

```

db.collectionName.updateOne({}) // it will update only first which got match
db.items.updateOne({ name: "Iphone se 2" }, { $set: { price: 5 } }); //The $set dollar help us to update the value.
db.items.updateMany({ name: "Iphone 6s" }, { $set: { ratings: 1, price: 2 } }); 

```

**Deleting data in Mongo db**

```

db.items.deleteOne({ price: 75000 });
db.items.deleteMany({ price: { $gt: 45000 } });
db.items.deleteMany({}); //If we don't pass any query it will clear all the records from db

```

**Basic Command for Mongo in terminal**

    1. show dbs //it will show the dbs in our system
    2. use dbname // (if there is no database present of that name it will create a new if it is there then it will switch to that db)
    3. After creating a database we have to first create a collection like in Sql we create a Table.
    4. db.collectionName.insertOne({name:"Denver", phone : "812693890" , occupation : "Software Engineer", active: true})
    5. To Switch to the database in which u want to see it data then type show collections
    6. db.collectionName.find().pretty() // TO prettify a database
    7. show collections it helps to see all the collection in our database.
    8. db.collectionsName.find(query,projection)  to get all the collection // what ever we pass in the quey it will search and projection helps what we want to show and not.
    9. db.collectionsName.find({key:"value"}) so we get that exact data of that key.



**ALL ABOUT SCHEMA**

-  A Mongoose Schema defines the structures of the document, default values,validators,etc.
-  This actually tells that which type of data you are going to store.
-  A Mongoose Model is a wrapper on the Mongoose Schema.
-  A mongoose schema defines the structures of the document,
-  default values,validators,etc,.. whereas a mongoose model provides an interface to the database for creating, querying , updating , deleting records,etc..
-  collection Name should be Singular and First letter Must be Capital Follow Pascal
