const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db=client.db('TodoApp');
 


  db.collection('Users').insertOne({
    name:'Abhishek',
    age:21,
    location:'hajipur' 
  },(err,result)=>{
    if(err){
      return console.log('unable to insert user',err);
    }
    console.log(JSON.stringify(result,undefined,2));
    //client.close();
  })
  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result, undefined, 2));
    client.close();
  });

  
});