import React from 'react'

const login = () => {
return(
    <>
    <section>
  <div className="container-fluid ">
    <div className="row d-flex text-center justify-content-around">
     
    <div className="login-page">
   
  <div className="form">   <h2>User Login</h2>
    <form className="register-form">
      <input type="text" placeholder="user" />
      <input type="password" placeholder="password" />
      <input type="text" placeholder="email address" />
      <button>create</button>
      <p className="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form className="login-form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>login</button>
      <p className="message">Not registered? <a href="/signup">Create an account</a></p>
    </form>
  </div>
</div>


    
    </div>
  </div>
</section>
   
</>
)
 };

export default login
