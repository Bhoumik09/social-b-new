const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_CREDENTIALS}@cluster0.lrcpv.mongodb.net/`, {
    useNewUrlParser: true,
  })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch(err => {
      console.error("Database connection failed:", err);
    });
  

module.exports=router;

