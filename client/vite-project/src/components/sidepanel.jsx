import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import { NavLink, useLocation } from "react-router-dom";
// eslint-disable-next-line react-hooks/rules-of-hooks
const sidebar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [navCollapse, setNavCollapse] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [smallNavCollapse, setSmallNavCollapse] = useState(false);

  const handleNavToggle = () => {
    setNavCollapse(!navCollapse);
  };

  // eslint-disable-next-line no-unused-vars
  const handleSmallNavToggle = () => {
    setSmallNavCollapse(!smallNavCollapse);
  };

  // const navCollapse=()=>{
  //   setSidebarCollapsed(!isSidebarCollapsed);
  // }
  // const sidebarId = isSidebarCollapsed ? "collapsed-sidebar" : "expanded-sidebar";
  return (
    <>
      <section
        className={`$ {smallNavCollpase ? " smallNav " : ""} sidebar { ${
          navCollapse ? "navCollapse" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto  sm-2  d-flex-column justify-content-between">
              <i className="bi bi-speedometer2 smallDeviceIcon"></i>
              <div className="mx-1 ">
                <hr className="mt-1" />
                <a className="d-flex justify-content-around text-decoration-none ms-4  align-items-center d-none d-sm-inline">
                  <span className="fs-4 text-black">Seller</span>
                </a>
                <i
                  className=" hamburger-button bi bi-list largeDeviceIcon mt-2 "
                  onClick={handleNavToggle}
                />
                <i
                  className=" hamburger-button bi bi-list smallDeviceIcon  mt-2"
                  onClick={handleNavToggle}
                />

                <hr className="d-none d-sm-block" />

                <ul
                  className={`nav nav-pills flex-column mt-2 mt-1 sm-0 ${
                    navCollapse ? "collapse" : ""
                  }`}
                  id="parentM"
                >
                  <li
                    className="nav-item  my-1
                    py-2 py-sm-0"
                  >
                    <NavLink
                      className={`nav-link text-black text-centre text-sm-start ${
                        location.pathname === "/dashboard" ? "active" : ""
                      }`}
                      href="/dashboard"
                      aria-current="page"
                    >
                      <i className="bi bi-speedometer2"></i>
                      <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                    </NavLink>
                  </li>

                  <li className="nav-item my-1">
                    <a
                      className="nav-link text-black  "
                      href="/aunction"
                      aria-current="page"
                    >
                      <i className="bi bi-grid"></i>
                      <span className="ms-2 d-none d-sm-inline">Aunctions</span>
                      <i className="bi bi-arrow-down-short ms-0 ms-sm"></i>
                    </a>
                  </li>
                  <li className="nav-item  my-1 py-2 py-sm-0">
                    <a
                      className="nav-link text-black "
                      href="/lots"
                      data-bs-toggle="collapse"
                      data-bs-target="#submenu2"
                      aria-current="page"
                    >
                      <i className="bi bi-bookmarks"></i>
                      <span className="ms-2 d-none d-sm-inline">Lots</span>
                      <i className="bi bi-arrow-down-short  ms-0 ms-sm"></i>
                    </a>

                    <ul
                      className="nav collapse ms-1 flex-row "
                      id="submenu2"
                      data-bs-parent="#ParentM"
                    >
                      <li className="nav-item  ">
                        <a
                          className="nav-link  text-black text-centre text-sm-start "
                          href="/lots"
                          aria-current="page"
                        >
                          My Lots
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link text-black" href="soldlots">
                          Sold Lots
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item  my-1 py-2 py-sm-0">
                    <a
                      className="nav-link text-black "
                      href="/buyer"
                      data-bs-toggle="collapse"
                       data-bs-target="#submenu3"
                     aria-current="page"
                    >
                      <i className="bi bi-briefcase"></i>
                      <span className="ms-2 d-none d-sm-inline">
                        Buyer Portal
                      </span>
                      <i className="bi bi-arrow-down-short ms-0 ms-sm"></i>
                    </a>

                    <ul
                      className="nav collapse ms-1 flex-row  "
                      id="submenu3"
                      data-bs-parent="#parentM"
                    >
                      <li className="nav-item ">
                        <a
                          className="nav-link text-black text-centre text-sm-start "
                          href="gst"
                          aria-current="page"
                        >
                          Gst
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link text-black" href="/address">
                          Addresses
                        </a>
                      </li>
                    </ul>
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
                    planter
                  </span>
                </a>
                <div
                  className={`dropdown-menu ${navCollapse ? "d-none" : ""}`}
                  aria-labelledby="triggerId"
                >
                  <a className="dropdown-item" href="profile">
                    Profile
                  </a>
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

export default sidebar;
