const express=require('express');
const mongoose = require('mongoose');
const router= require('./route/routes.js');
const bodyParser = require('body-parser');
const dotenv=require('dotenv');
const app=express();

app.use(bodyParser.json())
dotenv.config();
app.use(router);

const port=process.env.PORT;
const dbUri = process.env.DBURL;
const options={
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
}
mongoose.connect(dbUri,options)
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

app.listen(port,(err)=>{
 if(err)
 {
  console.log('server failed');
 }else{
  console.log(`server is running on port ${port}`);
 }
})
