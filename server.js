const express = require('express');
const mongoose = require('mongoose');
// const bodyParser=require('body-Parser');
const app = express();
const port = 3000;
const routerAddress =require('./router'); 
const schema=require('./schema');

// Connection URL and Database Name.
const dbURL = "mongodb+srv://Hanusoni133:1234@cluster0.3rrxgxk.mongodb.net/AlmabetterTask";

// Connection  to MongoDB Atlas **MONGOOSE**
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });


//app.use(express.bodyParser)
app.use(express.json()); //  so that the data can be read in JSON format
app.use(routerAddress);//created a seperate file for all api calls and  connected to server.
// app.use(bodyParser.json())
// Start the server in  port 3000.
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
