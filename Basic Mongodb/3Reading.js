// 1. First we have to show dbs to get all the databse store in our localhost machine
// 2. afte then we have to selct the databse in which we have to see for that  use dbname
// 3. show collections it helps to see all the collection in our database.
// 4  db.collectionsname.find(query,projection)  to get al the collection
// what ever we pass in the quey it will search and show you that data
// in projection it helps what we want to show and what we want to not.
// 5  db.collectionsname.find().pretty() to get in petrrier format
// 6  db.collectionsname.find({key:"value"}) so we get thhat exact data of that key.
db.items.find({ price: 75000 });

//7. The price above 5000 it will give all the items gte means greater than eeual to 5000.
db.items.find({ price: { $gte: 5000 } });
//8. The price above 5000 it will give all the items gte means greater than 5000.
db.items.find({ price: { $gt: 5000 } });

//9. AND Opreator conditons
db.items.find({ price: { $gt: 5000 }, sold: { $gt: 10000 } });

//9. OR OpERATOR This is the or oprator only The take care os syntax
db.items.find({ $or: [{ price: { $gt: 5000 } }, { qty: { $lt: 10000 } }] });

//10. This only give the object id and we can also pass as many args
db.items.find({ price: { $gt: 5000 } }, { rating: 1 });

//11. if we write like this we only get th eobject id and the prices only
db.items.find({ price: 75000 }, { price: 1 });
//12. Now we only get the price.
db.items.find({ price: 75000 }, { id: 0, price: 1 });
//13. So we get only one data whose proce is 75000
db.items.find({ price: 75000 }).pretty().limit(1);
//13. So we get only one data whose proce is 75000 but pretty() is not avialble.
db.items.findOne({ price: 75000 });
//14. It will skip(1) and show only one whose proce 75000 of two are same then it will second one.
db.items.find({ price: 75000 }).pretty().limit(1).skip(1);
