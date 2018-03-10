const {MongoClient, ObjectID} = require('mongodb');
const authentication = require("./authentication.js");
let url = authentication();


MongoClient.connect(url , (error, client)=>{
    if (error) {
      return console.log('Unable to connect to MongoDB server');
      console.log('Connected to MongoDB server');

    }
    const db = client.db('mongosaad');

    db.collection('Users').findOneAndUpdate({name: 'Saad'},
   {
      $set: {
        name: 'Mike'
      },
      $inc: {
        age: 1
      }
   },
    {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });





  client.close();
  });
