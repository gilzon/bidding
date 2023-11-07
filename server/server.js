const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// Import the Product model
const Product = require('./models/products')
const app = express();
const PORT = process.env.PORT || 5000; // Define the port you want your server to run on

// Enable CORS for all routes
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/bidding', {
  
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Define your API routes here

const productsRoute = require('./routes/products'); // Import the route you created


// Use the routes

app.use('/products',productsRoute)

app.post('/products',async (req,res)=>{
  console.log(req.body)
  const newProduct = new Product(req.body);
  const savedProduct  = await newProduct.save();
  res.status(201).json(savedProduct);

})


// Use other routes as needed
// Example: app.get('/api/products', (req, res) => { /* Your logic here */ });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
