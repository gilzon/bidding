// AdminPanel.js
import React from "react";

const AdminPanel = () => {
  return (
    <>
      <section className="dash">
        <div className="container-fluid">
          <div className="row d-flex justify-content-around text-center">
            <h2>Admin Dashboard</h2>
            <hr></hr>
            <div className="col-6 sm-6 d-flex-column justify-content-between">
              <div className="card">
                <div className="card-header">Product Management</div>
                <div className="card-body">
                  Manage product details, images, starting prices, and auction parameters.
                </div>
              </div>
            </div>
            <div className="col-6 sm-6 d-flex-column justify-content-between">
              <div className="card">
                <div className="card-header">User Management</div>
                <div className="card-body">
                  Manage user accounts, roles, and permissions.
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-around text-center mt-5">
            <div className="col-6 sm-6 d-flex-column justify-content-between">
              <div className="card">
                <div className="card-header">Reporting and Analytics</div>
                <div className="card-body">
                  Track bidding activities, product performance, and user statistics.
                </div>
              </div>
            </div>
            <div className="col-6 sm-6 d-flex-column justify-content-between">
              <div className="card">
                <div className="card-header">Auction Center Management</div>
                <div className="card-body">
                  Administer the auction center, add, edit, or delete products for bidding.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPanel;

