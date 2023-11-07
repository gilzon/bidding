
import React ,{useState}from 'react';
import { CForm, CCol, CFormInput, CFormSelect,  } from '@coreui/react';

const addaddress = () => {
    const [formData , setFormData] = useState({
        name: '',  
        lastname: '' ,
        address1: '' ,
        address2: '' ,
        city: '',
        state: '',
        zip: '',
        rememberMe: false,
    })
    const handleChange =(e) =>{
        const {name,value,type,checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
          });
    }
  return (
    <div>
      <section className=' addressform'>
        <div className="container-fluid">
           <div className="row">

          <div className="card address">
          <CForm className="row g-3">
           <CCol md={6}>
    <CFormInput type="name" id="Name" label="Name" />
  </CCol>
   
  <CCol md={6}>
    <CFormInput type="lastname" id="Name" label="Lastname" />
  </CCol>
  <CCol xs={12}>
    <CFormInput id="inputAddress" label="Address" placeholder="1234 Main St"/>
  </CCol>
  <CCol xs={12}>
    <CFormInput id="inputAddress2" label="Address 2" placeholder="Apartment, studio, or floor"/>
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

export default addaddress
