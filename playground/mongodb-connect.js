const {MongoClient, ObjectID} = require('mongodb');
const authentication = require("./authentication.js");
let url = authentication();
// Object destructuring es5 >
// let user  = {name: 'Saad', age: 21};
// let {name} = user;
// console.log(name);
//
// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect(url , (error, client)=>{
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('mongosaad');
  //

  let addUser = (name, age, location) => {
    let object = {
      name: name,
      age: age,
      location: location
    };

    db.collection('Users').insertOne(object, (error, result) => {
      if (error) {
        return console.log('Unable to insert user', error);
      }
      console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });
  }
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('5aa3839a0f4caf3374bc0256')
  // }).toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });



    db.collection('Users').find({
      name: "Andew"
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
      console.log('Unable to fetch todos', error);
    });
  // addUser('Mike', 21, 'USA');

  //Insert new doc into Users (name, age, location)


  client.close();
});
