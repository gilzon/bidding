// import React from 'react'

// const view = () => {
//   return (
//     <div>
//         <section>
//   <div className="container-fluid">
//     <div className="row d-flex text-center justify-content-around">
//       <h2>view</h2>
//       <hr />
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default view

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const view = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const productId = useParams().id;
console.log("Fetching product with id:", productId);

axios.get(`http://localhost:5000/products/${productId}`)
  .then((response) => {
    console.log("Product data:", response.data);
    // Handle the data
  })
  .catch((error) => {
    console.error("Error fetching product:", error);
    if (error.response) {
      // Log the status code and error response data
      console.error("Status Code:", error.response.status);
      console.error("Response Data:", error.response.data);
    }
  });

  useEffect(() => {
    // Fetch the product data based on the ID from your API
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
       
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          {/* Image Section */}
          <img
            src={product.image} // Replace with your image URL
            alt={product.description} // Add an appropriate alt text
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-md-6">
          {/* Item Details */}
          <h2>{product.lotNumber}</h2>
          <p>{product.description}</p>
          <p>Lot Type: {product.lotType}</p>
          <p>Sub Type: {product.subType}</p>
          <p>Liter Weight: {product.literWeight}</p>
          <p>Net Weight: {product.netWeight}</p>
          <p>Sample Weight: {product.sampleWeight}</p>
          <p>Color: {product.color}</p>
          <p>Moisture Content: {product.moistureContent}</p>
          <p>Clean Lot: {product.cleanLot}</p>
          <p>Quote Price: {product.quotePrice}</p>
          <p>Seller: {product.seller}</p>
          <div>
            <Link to={`/productmanage/edit/${id}`}>
              <button className="btn btn-primary me-2">Edit</button>
            </Link>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default view;

