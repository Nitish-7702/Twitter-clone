const express = require("express");
const app = express()
const port = 3000;
const cors = require("cors")


app.get("/", (req,res) =>{
    console.log("hi there")
    res.status(200).json({
       message : "Hi there"
    })
})
app.listen(port);