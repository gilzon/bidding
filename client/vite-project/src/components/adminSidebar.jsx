import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

const AdminSidebar = () => {
  const [navCollapse, setNavCollapse] = useState(false);
  const [smallNavCollapse, setSmallNavCollapse] = useState(false);

  const handleNavToggle = () => {
    setNavCollapse(!navCollapse);
  };

  const handleSmallNavToggle = () => {
    setSmallNavCollapse(!smallNavCollapse);
  };

  return (
    <>
      <section
        className={`sidebar ${navCollapse ? "collapsed" : ""}`}
        style={{ width: navCollapse ? "4rem" : "13.7rem" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 sm-2 ">
              <div className="flex-column justify-content-center align-items-center ">
                <hr className="mt-1" />
                <div className="head d-flex justify-content-around text-decoration-none ms-4 align-items-center d-none d-sm-inline">
                  <span className="fs-4 text-black">Admin</span>
                </div>
                <i
                  className={`hamburger-button bi bi-list largeDeviceIcon mx-2 my-1 align-items-center text-center ${
                    navCollapse ? "collapsed" : ""
                  }`}
                  onClick={handleNavToggle}
                />
                <i
                  className={`hamburger-button bi bi-list smallDeviceIcon my-2 mx-1 align-items-center ${
                    smallNavCollapse ? "collapsed" : ""
                  }`}
                  onClick={handleSmallNavToggle}
                />

                <hr className="d-none d-sm-block" />

                <ul
                  className={`nav nav-pills flex-column mt-1 mt-sm-0 ${
                    navCollapse ? "collapsed" : ""
                  }`}
                  id="parentM"
                >
                  <li className="nav-item my-2 py-2 py-sm-0">
                    <NavLink
                      to="/adminpanel"
                      className="nav-link text-black text-centre text-sm-start"
                      activeclassname="active"
                    >
                      <i className="bi bi-speedometer2"></i>
                      <span className="ms-2">Dashboard</span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/productmanage"
                      className="nav-link text-black"
                      activeclassname="active"
                    >
                      <i className="bi bi-grid"></i>
                      <span className="ms-2">Product Manage</span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/adminusermanagement"
                      className="nav-link text-black"
                      activeclassname="active"
                    >
                      <i className="bi bi-people"></i>
                      <span className="ms-2">User Management</span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/adminreporting"
                      className="nav-link text-black"
                      activeclassname="active"
                    >
                      <i className="bi bi-bar-chart-line"></i>
                      <span className="ms-2">Reporting</span>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div
                className={`dropdown open ${navCollapse ? "collapsed" : ""}`}
              >
                <a
                  className="btn border-none dropdown-toggle-text-black"
                  type="button"
                  id="triggerId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    className={`bi bi-person fs-5 ${
                      navCollapse ? "d-none" : ""
                    }`}
                  />
                  <span
                    className={`fs-5 ms-3 d-none  ${
                      navCollapse ? "d-none" : ""
                    }`}
                  >
                    {" "}
                    Admin Name
                  </span>
                </a>
                <div
                  className={`dropdown-menu ${navCollapse ? "d-none" : ""}`}
                  aria-labelledby="triggerId"
                >
                  <NavLink to="/adminprofile" className="dropdown-item">
                    Profile
                  </NavLink>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminSidebar;
