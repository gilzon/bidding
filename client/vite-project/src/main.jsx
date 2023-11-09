import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { CloudinaryContext } from 'cloudinary-react';

// Configure Cloudinary
const cloudinaryConfig = {
  cloudName: 'dnxdktspd',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <CloudinaryContext {...cloudinaryConfig}>
    <App />
    </CloudinaryContext>
  </React.StrictMode>,
)
