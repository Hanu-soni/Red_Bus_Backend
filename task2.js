const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// Connection URL and database name
const url ="mongodb+srv://Hanusoni133:1234@cluster0.3rrxgxk.mongodb.net/"
const dbName = 'AlmabetterTask'; // Replace with your actual database name
const collectionName = 'state_district'; // Replace with your actual collection name

// Create a new MongoDB client
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB Atlas
client.connect().then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(error => {
  console.error('Error connecting to MongoDB Atlas:', error);
});

// Define a route to retrieve and serve data
app.get('/data', async (req, res) => {
    try {
      // Get the collection
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      // Retrieve data from MongoDB collection
      const data = await collection.find().toArray();
      console.log(data);
      JSON.stringify(data)
      res.send(data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
      console.log(error);
    }
  });


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});