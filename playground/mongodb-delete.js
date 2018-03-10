const {MongoClient, ObjectID} = require('mongodb');
const authentication = require("./authentication.js");
let url = authentication();


MongoClient.connect(url , (error, client)=>{
  if (error) {
    return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');

  }
    const db = client.db('mongosaad');


    // deleteMany
    // db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
    //   console.log(result);
    // });

    // //deleteOne
    // db.collection('Todos').deleteOne({text: "Something to do"}).then((result) => {
    //   console.log(result);
    // });


    //findOneandDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });


    // db.collection('Users').deleteMany({name: 'Andew'});
    // db.collection('Users').findOneAndDelete({
    //   _id: new ObjectID("5aa3863855917e29cca4a51a")
    // }).then((results) => {
    //   console.log(JSON.stringify(results, undefined, 2));
    // })


    client.close();
  });
