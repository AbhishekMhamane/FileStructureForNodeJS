//importing required packages and routes
const express=require('express');
const mongoose=require('mongoose');
const router=require('./routes/route');

//intialized express app
const app=express();

//setting view engine
app.set('view engine','ejs');

//donfigured dotenv for environmental varibales
require('dotenv').config();
const PORT=process.env.PORT || 3000;

//using middleware
app.use(express.json());
app.use(express.urlencoded());

//connecting mongoose present on local system
mongoose.connect('mongodb://localhost:27017/wikidb', {useNewUrlParser: true,useUnifiedTopology:true});


//allowing to use routes 
app.use("/",router);

//server running on port 
app.listen(PORT, () => `Server running on port ${PORT} 🔥`);
