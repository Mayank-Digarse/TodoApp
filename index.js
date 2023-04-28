const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middle ware to parses json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//mount the todo ASPI routes
app.use("/api/vl" , todoRoutes);

//start server 
app.listen(PORT,() =>{
    console.log('Server started sucessfully at ${PORT}');
})

//connect to the database
const dbConnnect = require("./config/database");
dbConnnect();

//default Routes 
app.get("/",(req,res) =>{
    res.send('<h1>THis is HOMEPAGE baby</h1>');
})

