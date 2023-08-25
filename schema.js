const { Double } = require("mongodb");
const mongoose = require("mongoose");

// Define a schema for the trips collection
const Schema1 = new mongoose.Schema({
    // Define your schema fields here
    date: Date,
    from: String,
    to: String,
          busOwnerID: Number,
          startTime: Date,
          EndTime: Date,
          category: String,
          SeatBooked:[String],
          bus_no: String,
          animeties_list: [String],
          busFare: Number,
          busName: String
  });
  const Schema2 = new mongoose.Schema({
    // Define your schema fields here
    date: Date,
    from: String,
    to: String,
    Bus:String,
  });
  

  module.exports={Schema1,Schema2}



 