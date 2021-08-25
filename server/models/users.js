var mongoose=require('mongoose');




var User=mongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
});
/*
var newUser=new User({
    email:'abhishekanuj'
});
newUser.save().then((doc)=>{
    console.log(doc);
},(e)=>{
    console.log('unable to save data');
})
*/
module.exports={User};