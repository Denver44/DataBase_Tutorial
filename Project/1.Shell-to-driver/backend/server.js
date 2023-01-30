const app = require('./app');

const mongodb = require('mongodb');

mongodb.MongoClient.connect('mongodb://localhost/shellToDriver')
  .then(() => {
    console.log('connection done...');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3100, () => {
  console.log('Server started on PORT 3100');
});
