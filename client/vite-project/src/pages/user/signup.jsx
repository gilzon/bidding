import React from "react";

const signup = () => {
  const handleSubmit = (event) => {
    event.preventdefault();
  };
  return (
    <>
     <section>
        <div className="container-fluid">
          <div className="row d-flex justify-content-around text-center">
          <div className="signup-head align-items-center">
        <div className="container-xxl">
          <div className="signup">
            <h1>Planters </h1>
            <p>Organized Farming </p>

            <div className="signup-form">
              <div className="container-xxl">
                <div className="row">
                  <div className="card">
                    <form onSubmit={handleSubmit} method="post">
                      <input
                        className="text"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />

                      <input
                        className="text mobile"
                        type="mobile"
                        name="mobile"
                        placeholder="Mobile "
                        required
                      />

                      <input
                        className="text email"
                        type="email"
                        name="email"
                        placeholder=" Email"
                        required
                      />

                      <input
                        className="text"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                      />
                      <input
                        className="text w3lpass"
                        type="password"
                        name="password"
                        placeholder="Confirm Password"
                        required
                      />

                      <div className="wthree-text">
                        <label className="anim">
                          <input
                            type="checkbox"
                            className="checkbox"
                            required=""
                          />

                          <span>I Agree To The Terms & Conditions</span>
                        </label>
                        <div className="clear"> </div>
                      </div>

                    <button type="submit">SignUp</button>
                    </form>
                    <p className="message">
                      Have an Account? <a href={"/"}> Login Now!</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
           
          </div>
        </div>
      </section>
     
    </>
  );
};

export default signup;
