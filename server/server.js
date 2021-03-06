var express=require('express');
var bodyParser=require('body-parser');


var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todos');
var {User}=require('./models/users');

var app=express();
app.use(
    express.urlencoded({
      extended: true
    })
  );
app.use(express.json());

app.post('/todos',(req, res)=>{
    var todo=new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc)
    },(e)=>{
        res.status(400).send(e);
    })
    console.log(req.body);
});

app.listen(3000,()=>{
    console.log('listening to port 3000');
})