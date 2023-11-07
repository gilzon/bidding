import React, { useState } from 'react'
import {MdAddBusiness} from 'react-icons/md'
import Addgst from '../../components/addgst'

const gst = () => {
 
   const [isFormVisible,setFormVisible]=useState(false);
   const handleShowForm=()=>{
    console.log(handleShowForm)
    setFormVisible(true);
   }
 return <>
<section>
    <div className="container-fluid">
        <div className="row d-flex justify-content-around text-center">
            <h3>GST Details</h3>
            <hr />
            {<MdAddBusiness   className='gst-button'
            onClick={handleShowForm}
           
            />} {isFormVisible && <Addgst/>}
        </div>
    </div>
</section>

  </>
}

export default gst
