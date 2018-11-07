const express = require("express");
const path = require("path");
const open = require("open");

const axios = require('axios');

axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=355383a6').then(function(response){
    console.log(response.data);
    console.log(response.status);
  });

const port = 3000;
const app = express();

//<input id+->


app.get("/get/:title", (req, res) => {
 // res.sendFile(path.join(__dirname,"../src/index.html"));
 axios.get('http://www.omdbapi.com/?t='+ req.param("title") + '&apikey=355383a6').then(response => res.send(response.data))
});
app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname,"../src/index.html"));
 // axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=355383a6').then(response => res.send(response.data))
});
app.listen(port, (err) => {
 if(err){
 console.log(err);
 } else{
 open("http://localhost:" + port);
 }
});
