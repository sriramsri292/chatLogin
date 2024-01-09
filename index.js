const express=require ('express');
const HTTP_SERVER=express();

const port=5000;
require("dotenv").config();
HTTP_SERVER.listen(port,"0.0.0.0",(err)=>
{
    if (err) throw err;
  console.log(`Listening on PORT ${port}`);
})
require('./Database/dbconfig');
HTTP_SERVER.use('/',require('./app'));