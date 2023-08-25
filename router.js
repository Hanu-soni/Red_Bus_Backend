const  {Schema1,Schema2}=require ('./schema')
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const router = express.Router();
//import Schema from './schema';

//import Schema2 from './schema';
// Create a model based on the schema
const Trip = mongoose.model('trips', Schema1);

const UserDetail=mongoose.model('Userinfo',Schema2);
// Define a route to retrieve and serve data
router.get('/data', async (req, res) => {
    try {
      // Retrieve data from MongoDB collection using Mongoose model
      const data = await Trip.find();
      res.send(data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
      console.log(error);
    }
  });
  
  // Task-3: Inserting a new trip using POST request
  router.post('/insertTrip', async (req, res) => {
    try {
      const details = req.body;
      // Create a new trip document using the Mongoose model
      const newTrip = new Trip(details);
      await newTrip.save();
      res.status(200).send("Inserted Successfully");
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
      console.log(error);
    }
  });
  //This api is created to insert new trip using POST request .
  //From front , all data required for trip details is send from front end
  //The data is recieved at the back-end from req.body command.
  //If the schema is correct and everything goes well , data is inserted in Database .
  
  // Past trips GET request
  router.get('/pastTrips', async (req, res) => {
    try {
      // Query past trips and limit to 50 results using Mongoose model
      const pastTrips = await Trip.find({ endDate: { $lt: new Date() } }).limit(50);
      res.status(200).json(pastTrips);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
      console.log(error);
    }
  });
 //This api is created to insert new trip using GET request . 
 //Here , we are finding the data from backend and showing the result to front end.


  //Task-5 **Save the booking details of a user
  router.post('/userinfo',async (req,res)=>{
    const {date , from , to ,Bus}=req.body;
    try{
        const userinfo=new UserDetail({date , from , to ,Bus});
        console.log(userinfo);
        await userinfo.save();
        res.status(200).send("Userinfo saved successfully");
    }
    catch(err)
    {
        res.status(400).send({err:"An error occured"});
        console.log(err);
    }
  });
  //This api is used to 


  //Task-6 ** Show details for the Buses available on Date entered by user.
  router.get('/tripsDate', async (req, res) => {
    const { date } = req.query;
    console.log(date);
    // const parsedDate = moment(date, 'YYYY-MM-DD', true);
  
    try {
      //console.log(Trip.find());
        const trips = await Trip.find({ date:new Date(date)});
        console.log(trips);
  
      if (trips.length > 0) {
        res.status(200).json(trips);
      } else {
        res.status(404).json("No trips found for the specified date");
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error retrieving trip details' });
    }
  });


  //Task-7** Get request based on multiple parameters...
  router.get('/tripsCustomize', async (req, res) => {
    const { date,from,to,busFare} = req.query;
    console.log(date,from,to,busFare);
    // const parsedDate = moment(date, 'YYYY-MM-DD', true);
  
    try {
        const trips = await Trip.find({ date:date,from:from,to:to,busFare:busFare});
        console.log(trips)
  
      if (trips.length > 0) {
        res.status(200).send(trips);
      } else {
        res.status(404).json("No trips found for the specified date");
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error retrieving trip details' });
    }
  });


  //Task-8**API Documentation


   //This api is created to insert new trip using POST request .
  //From front , all data required for trip details is send from front end
  //The data is recieved at the back-end from req.body command.
  //If the schema is correct and everything goes well , data is inserted in Database .




  //This api is created to insert new trip using GET request . 
 //Here , we are finding the data from backend and showing the result to front end.

  
  

  module.exports=router;