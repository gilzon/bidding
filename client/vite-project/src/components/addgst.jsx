import React, { useState } from 'react';
import { CForm, CCol, CFormInput, CFormSelect,  } from '@coreui/react';

const addgst = () => {
    const [formData, setFormData] =useState({
        name: '' ,
        lastname: '' ,
        company: '' ,
        gst: '' ,
       city: '' ,
        state: '' ,
        zip: '' ,
        rememberMe: false,
       })

    
    const handleChange=(e) =>{
        const {name,value,type,checked} = e.target;
        setFormData({
            ...formData, [name]: type === 'checkbox' ? checked :value,})
    }
  return (
    <div>
      
<section>
    <div className="container-fluid">
       <div className="row">

      <div className="card gst">
        <h4>Add Company Details</h4>
        <hr />
      <CForm className="row g-3">
  <CCol md={6}>
    <CFormInput type="email" id="inputEmail4" label="name" />
  </CCol>
  <CCol md={6}>
    <CFormInput type="password" id="inputPassword4" label="lastname" />
  </CCol>
  <CCol xs={12}>
    <CFormInput id="inputAddress" label="company" placeholder="1234 Main St"/>
  </CCol>
  <CCol xs={12}>
    <CFormInput id="inputAddress2" label="gst" placeholder="Apartment, studio, or floor"/>
  </CCol>
  <CCol md={6}>
    <CFormInput id="inputCity" label="City"/>
  </CCol>
  <CCol md={4}>
    <CFormSelect id="inputState" label="State">
      <option>Choose...</option>
      <option>...</option>
    </CFormSelect>
  </CCol>
  <CCol md={2}>
    <CFormInput id="inputZip" label="Zip" />
  </CCol>
 
    
</CForm>
      </div>

       </div>
    </div>
</section>

    </div>
  )
}

export default addgst
