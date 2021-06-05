//requireing express
const express=require('express');
//importing rendermethod from ejs view engine
const render=require('ejs');
//importing models from model.person schema
const Person =require('../models/person');

//initializing express router variable
let router=express.Router();

//add routes you want also you can apply CRUD operation for perticular request
router.route("/")

.get(function(req,res)
{
    Person.find({},function(err,foundpersons)
    {
        res.render("show",{"persons":foundpersons});
        
    });
})

.post(function(req,res){

    const newperson=new Person({
       name:req.body.name,
       birthdate:req.body.birthdate,
       mobile:req.body.mobile,
       email:req.body.email
    });

    newperson.save(function(err)
    {
        if(!err)
        {
            res.redirect("add");
        }
        else{
            res.send(err);
        }

    });

});



router.post("/delete",function(req,res)
{

    Person.deleteOne({_id:req.body.pid},function(err)
    {
        if(!err)
        {
            res.redirect('/');
        }
        else{
            res.redirect('/');

            // res.send(err);
        }

    });

});


router.get("/add",function(req,res){
    
    res.render("add");
});




//exporting router module
module.exports=router;