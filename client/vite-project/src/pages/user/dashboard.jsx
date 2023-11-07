import React from "react";

const dashboard = () => {
  return (
    <>
      <section className="dash">
        <div className="container-fluid">
          <div className="row d-flex justify-content-around text-center">
            <h2>Seller Dashboard </h2>
            <hr></hr>
            <div className="col-6  sm-6  d-flex-column justify-content-between">
              <div className="card ">
                <div className="card-header">My Lots</div>
                <div className="card-body"></div>
              </div>
            </div>
            <div className="col-6  sm-6 d-flex-column justify-content-between">
              <div className="card d-flex justify-content-between">
                <div className="card-header">Sold Lots</div>
                <div className="card-body"></div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default dashboard;
