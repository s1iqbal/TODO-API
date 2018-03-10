const express = require('express'),
      bodyParser = require('body-parser'),
      {mongoose} = require('./db/mongoose'),
      {Todo} = require('./models/todo'),
      {User} = require('./models/user'),
      app = express();



app.use(bodyParser.json());
//CRUD = create, read, update, delete
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  })
});



// GET /todos/12321
app.listen(3000, () => {
  console.log('Started on port 3000');
});


module.exports = {app};
