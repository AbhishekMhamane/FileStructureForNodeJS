const mongoose=require('mongoose');

const personalSchema=mongoose.Schema({

    name:String,
    birthdate:String,
    mobile:Number,
    email:String,
 

});

module.exports=mongoose.model("Person",personalSchema);