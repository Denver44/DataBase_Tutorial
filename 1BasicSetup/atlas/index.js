const mongoose = require('mongoose');

const uri =
  'mongodb+srv://project_name>:<password>@cluster0.gspnu.mongodb.net/<db_name>?retryWrites=true&w=majority';

mongoose
  .connect(uri)
  .then(() => {
    console.log('connection done...');
  })
  .catch((err) => {
    console.log(err);
  });
