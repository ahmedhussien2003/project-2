// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');

// Start up an instance of app
const app=express();
/* Middleware*/
const bodyParser=require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
import cors from 'cors';
app.use(cors());
// Initialize the main project folder
app.use(express.static('./website'));


// Setup Server
const port=3000;
const server=app.listen(port,()=>{
    console.log('our server is yes!!');
    console.log(`we are running on port ${port}`);
});
//get information from the port
app.get('/allinfo',(req,res)=>{
    res.send(projectData);
});
//post data using port
app.post('/all-data',(req,res)=>{
    projectData={
        date:req.body.date,
        temp:req.body.temp,
        content:req.body.content
    }
})
