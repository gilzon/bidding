


import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Table } from 'react-bootstrap';
import axios from "axios";
import { Link } from"react-router-dom";

import { AdvancedImage } from'@cloudinary/react';
import { Cloudinary } from'@cloudinary/url-gen';
import { fill } from'@cloudinary/url-gen/actions/resize';

const ProductManage = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dnxdktspd',
    },
  });

  const [formData, setFormData] = useState({
    lotNumber: "",
    productImage: null,
    description: "",
    lotType: "",
    subType: "",
    literWeight: "",
    netWeight: "",
    sampleWeight: "",
    color: "",
    moistureContent: "",
    cleanLot: "",
    quotePrice: "",
    seller: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, productImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const data = new FormData();

    // Add the image file to the FormData object
    data.append("productImage", formData.productImage);

    // Add the rest of the form data to the FormData object
    for (const key in formData) {
      if (key !== "productImage") {
        data.append(key, formData[key]);
      }
    }

    // Make a POST request to the server
    const response = await axios.post("http://localhost:5000/products", data);

    // Handle the response...
    if (response.status === 201) {
      // Product added successfully
      console.log("Product added successfully");

      setProducts([...products, response.data]);

      // Optionally, you can clear the form fields or close the modal
      setFormData({
        lotNumber: "",
        productImage: null,
        description: "",
        lotType: "",
        subType: "",
        literWeight: "",
        netWeight: "",
        sampleWeight: "",
        color: "",
        moistureContent: "",
        cleanLot: "",
        quotePrice: "",
        seller: "",
      });
      handleClose();
    } else {
      // Handle other status codes as needed
    }
  };

  useEffect(() => {
    // Fetch the list of products from your server when the component mounts
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5000/products");
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);   


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="post" onSubmit={handleSubmit}>
            <Form.Group controlId="lotNumber">
              <Form.Label>Lot Number</Form.Label>
              <Form.Control
                type="text"
                name="lotNumber"
                value={formData.lotNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="productImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="productImage"
                onChange={handleImageChange}
              />
            </Form.Group>



            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="lotType">
              <Form.Label>Lot Type</Form.Label>
              <Form.Control
                type="text"
                name="lotType"
                value={formData.lotType}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="subType">
              <Form.Label>Sub Type</Form.Label>
              <Form.Control
                type="text"
                name="subType"
                value={formData.subType}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="literWeight">
              <Form.Label>Liter Weight</Form.Label>
              <Form.Control
                type="text"
                name="literWeight"
                value={formData.literWeight}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="netWeight">
              <Form.Label>Net Weight</Form.Label>
              <Form.Control
                type="text"
                name="netWeight"
                value={formData.netWeight}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="sampleWeight">
              <Form.Label>Sample Weight</Form.Label>
              <Form.Control
                type="text"
                name="sampleWeight"
                value={formData.sampleWeight}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="color">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="moistureContent">
              <Form.Label>Moisture Content</Form.Label>
              <Form.Control
                type="text"
                name="moistureContent"
                value={formData.moistureContent}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="cleanLot">
              <Form.Label>Clean Lot</Form.Label>
              <Form.Control
                type="text"
                name="cleanLot"
                value={formData.cleanLot}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="quotePrice">
              <Form.Label>Quote Price</Form.Label>
              <Form.Control
                type="text"
                name="quotePrice"
                value={formData.quotePrice}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="seller">
              <Form.Label>Seller</Form.Label>
              <Form.Control
                type="text"
                name="seller"
                value={formData.seller}
                onChange={handleChange}
              />
            </Form.Group>
          

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <div className="w-100 rounded bg-white border shadow p-4 ">
        <div className="container-fluid ">
          <div>
            <div className="justify-content-between align-items-center">
              <h2>Item List</h2>

              <button className="addItem-Button" onClick={handleShow}>
                Add Item
              </button>
            </div>
          </div>
        </div>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>LotNumber</th>
             
              <th>LotType</th>
           
              <th>LiterWeight</th>
              <th>NetWeight</th>
            
              <th>Color</th>
           
              <th>CleanLot</th>
              <th>QuotePrice</th>
              <th>Seller</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                <img src={product.imageUrl} alt="Product" style={{width:'80px' , height:'50px'}} />
              </td>
                <td>{product.lotNumber}</td>
                <td>{product.description}</td>
                <td>{product.lotType}</td>
                <td>{product.subType}</td>
                <td>{product.literWeight}</td>
                <td>{product.netWeight}</td>
                <td>{product.sampleWeight}</td>
                <td>{product.color}</td>
                <td>{product.moistureContent}</td>
                <td>{product.cleanLot}</td>
                <td>{product.quotePrice}</td>
                <td>{product.seller}</td>
                <td>
                 <Link to={`${product._id}/view`}> <button className="btn btn-sm btn-info me-2 " >view</button></Link>
                  <button className="btn btn-sm btn-secondary me-2 ">
                    edit
                  </button>
                  <button className="btn btn-sm btn-danger me-2 ">
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ProductManage;
