// const request = require('supertest');
// const assert = require('assert');
const express = require('express');

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint.

app.get('/user', function(req, res) {
  throw new Error("User not found");
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// Global Catches
app.use((err,req,res,next)=>{
    errorCount++;
    // if(errorCount>10){
    //   res.send("bhai server toh gya fix it")
    // }
    res.json({msg:"something went wrong with the server"})
    
})

app.listen(3000);

module.exports = app;



// learn about sentry to deep dive into it .