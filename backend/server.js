const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
require('dotenv').config();

mongoose.connect(process.env.MONGODB_CONNECTION, err =>{
    if(err){
        console.log("error with database");
    }else{
        console.log("Database connected");
    }
})


const app = express();

app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/', routes);

app.listen(process.env.SERVER_PORT, ()=>{
    console.log("Server started at " + process.env.SERVER_PORT);
})