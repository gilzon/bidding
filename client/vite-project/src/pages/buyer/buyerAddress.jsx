import React, { useState } from 'react'
import Addaddress from '../../components/addaddress'
import {BsFillHouseAddFill} from 'react-icons/bs'
const buyerAddress = () => {
  const [isFormVisible,setFormVisible] =useState(false);
const handleShowForm =() =>{
  console.log('Button clicked');
  setFormVisible(true);
}
  

  return<>
  
 <section>
        <div className="container-fluid">
          <div className="row  d-flex justify-content-around text-center ">
           
          <h3>Add Address</h3>
         <hr />
        {<BsFillHouseAddFill
         className='address-button' 
         onClick={handleShowForm}
         /> }
         {isFormVisible && <Addaddress/>}
          </div>
        </div>
      </section>
  </>
  
        }

export default buyerAddress
