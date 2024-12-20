const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.MONGO_URL}`, {
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch(err => {
      console.error("Database connection failed:", err);
    });
  

module.exports=router;

