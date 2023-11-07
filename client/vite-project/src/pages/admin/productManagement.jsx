

import React, { useState , useEffect } from "react";
// import { Form, Button, Modal, Row, Col, Card } from "react-bootstrap";
import { Button, Table } from "react-bootstrap"
import axios from "axios";

const ProductManage = () => {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log('Handle Show Clicked'); // Add this line for debugging
    setShow(true);
  };
  
  const [formData, setFormData] = useState({
    lotNumber: "",
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

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0]; // Get the selected image file

  //   if (file) {
  //     // You can perform additional validation here, e.g., file type, size, etc.

  //     // Read the selected image file as a data URL
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const imageDataURL = e.target.result;

  //       // Update your component state with the selected image data URL
  //       setFormData({ ...formData, image: imageDataURL });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the server to add the product
      const response = await axios.post('http://localhost:5000/products', formData);

      if (response.status === 201) {
        // Product added successfully
        // You can handle the success case here, e.g., display a success message
        console.log('Product added successfully');
       
        setProducts([...products, response.data]);

        // Optionally, you can clear the form fields or close the modal
        setFormData({
          lotNumber: "",
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
        handleClose(); // Close the modal
      } else {
        // Handle other status codes as needed
      }
    } catch (error) {
      // Handle errors, such as displaying an error message
      console.error('Error adding product:', error);
    }
  
  };
  useEffect(() => {
    // Fetch the list of products from your server when the component mounts
    // Update the 'products' state with the fetched data
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5000/products');
         console.log(result.data)
        setProducts(result.data);
       
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

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

            {/* <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.File
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group> */}

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

 

<div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
<h2>Item List</h2>
<div className="w-75 rounded bg-white border shadow p-4">
<table>
  <thead>
    <tr>
      <th>lotNumber</th>
      <th>description</th>
      <th>lotType</th>
      <th>subType</th>
      <th>literWeight</th>
      <th>netWeight</th>
      <th>sampleWeight</th>
      <th>color</th>
      <th>moistureContent</th>
      <th>cleanLot</th>
      <th>quotePrice</th>
      <th>seller</th>
    </tr>
  </thead>
  <tbody>{
    products.map((product,index)=>(
<tr key={index}>
 <td>{products.lotNumber}</td>
 <td>{products.description}</td>
 <td>{products.lotType}</td>
 <td>{products.subType}</td>
 <td>{products.literWeight}</td>
 <td>{products.netWeight}</td>
 <td>{products.sampleWeight}</td>
 <td>{products.color}</td>
 <td>{products.moistureContent}</td>
 <td>{products.cleanLot}</td>
 <td>{products.quotePrice}</td>
 <td>{products.seller}</td>
<td>
  <Button onClick={()=>{deleteProduct(product._id)}} variant='danger'>Delete</Button>
  <Button onClick={()=>{updateProduct(product._id)}} variant='primary'>edit</Button>

</td>
</tr>
    )
 )
}</tbody>
</table>
</div>
</div>
   
export default ProductManage;
