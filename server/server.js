


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const Product = require('./models/products')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bidding', {
  
});

cloudinary.config({
  cloud_name: 'dnxdktspd',
  api_key: '814445123213543',
  api_secret: 'k042NnF8yrP9dMDMYY6lLdl4VGo',
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'bidding',
    format: async (req, file) => 'png',
    public_id: (req, file) => file.originalname,
  },
});

const parser = multer({ storage: storage });
const productsRoute = require('./routes/products');

app.use('/products',productsRoute)
app.post('/products', parser.single('productImage'), async (req, res) => {
  const newProduct = new Product(req.body);
  console.log(req.body)
  newProduct.imageUrl = req.file.path;
  const savedProduct = await newProduct.save();

  res.status(201).json(savedProduct);
});

app.get('/products/:id',async (req,res)=>{
  const productId  = req.params.id;
  const productData = await Product.findById(productId);
  if(productData){
    res.json(productData)
  }else{
    res.status(404).json({ error: 'Product not found' }); 
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


