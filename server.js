// Require Express to run server and routes
const express=require('express')
// Cors for cross origin allowance
const cors=require('cors')
// Start up an instance of app

app=express()
const bodyParser=require('body-parser')
const res = require('express/lib/response')
// Setup empty JS object to act as endpoint for all routes
projectData = {};

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port=5000
app.listen(port,console.log(`server is running on port ${port}`))

app.post('/addData',(req,res)=>{
projectData.temp=req.body.temp
projectData.date=req.body.date
projectData.feelings=req.body.feelings
res.end()
})
app.get('/all',(req,res)=>{
    res.send(projectData)
})