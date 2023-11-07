// import React, { useState } from "react";

// import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/js/dist/dropdown";
// import "bootstrap/js/dist/collapse";

// const buyerSidebar = () => {
//   const [navCollapse, setNavCollapse] = useState(false);
//   const [smallNavCollapse, setSmallNavCollapse] = useState(false);

//   const handleNavToggle = () => {
//     setNavCollapse(!navCollapse);
//   };

//   const handleSmallNavToggle = () => {
//     setSmallNavCollapse(!smallNavCollapse);
//   };


//   return (
//     <>
//       <section
//         className={`sidebar ${navCollapse ? "collapsed" : ""}`}
//         style={{ width: navCollapse ? "4rem" : "13.7rem" }}
//       >
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12  sm-2 ">
//               <div className="flex-column justify-content-center align-items-center ">
//                 <hr className="mt-1" />
//                 <div className=" head d-flex  justify-content-around text-decoration-none ms-4 align-items-center d-none d-sm-inline">
//                   <span className=" fs-4 text-black">Buyer</span>
//                 </div>
//                 <i
//                   className={`hamburger-button bi bi-list largeDeviceIcon  mx-2 my-1 align-items-center text-center ${
//                     navCollapse ? "collapsed" : ""
//                   }`}
//                   onClick={handleNavToggle}
//                 />
//                 <i
//                   className={`hamburger-button bi bi-list smallDeviceIcon   my-2 mx-1 align-items-center ${
//                     smallNavCollapse ? "collapsed" : ""
//                   }`}
//                   onClick={handleSmallNavToggle}
//                 />

//                 <hr className="d-none d-sm-block" />

//                 <ul
//                   className={`nav nav-pills flex-column mt-1 mt-sm-0 ${
//                     navCollapse ? "collapsed" : ""
//                   }`}
//                   id="parentM"
//                 >
//                   <li className="nav-item my-2 py-2 py-sm-0">
//                     <NavLink
//                       to="/buyerdashboard"
//                       className="nav-link text-black text-centre text-sm-start"
//                       activeclassname="active"
//                     >
//                       <i className="bi bi-speedometer2"></i>
//                       <span className="ms-2">Dashboard</span>
//                     </NavLink>
//                   </li>

                  // <li className="nav-item ">
                  //   <NavLink
                  //     to="/buyerauction"
                  //     className="nav-link text-black"
                  //     activeclassname="active"
                  //   >
                  //     <i className="bi bi-grid"></i>
                  //     <span className="ms-2">Live Auctions</span>
                  //     <img className="bi bi-arrow-down-short ms-0 ms-sm"></img>
                  //   </NavLink>
                  // </li>
                 
                  // <li className="nav-item  my-1 py-2 py-sm-0">

                  //   <a
                  //     className="nav-link text-black "
                     
                  //     href="/lots"
                  //     data-bs-toggle="collapse"
                  //     data-bs-target="#submenu2"
                  //     aria-current="page"
                  //   >
                  //     <i className="bi bi-bookmarks"></i>
                  //     <span className="ms-2">Lots</span>
                  //     <i className="bi bi-arrow-down-short  ms-0 ms-sm"></i>
                  //   </a>

                  //   <ul
                  //     className="nav collapse ms-1 flex-row "
                  //     id="submenu2"
                  //     data-bs-parent="#ParentM"
                  //   >
                  //     <li className="nav-item  ">
                        
                  //       <a
                  //         className="nav-link  text-black text-centre text-sm-start "
                  //         href="/lots"
                  //         aria-current="page"
                  //       >
                  //         My Lots
                  //       </a>
                  //     </li>
                  //     <li className="nav-item ">
                  //       <a className="nav-link text-black" href="soldlots">
                  //         All Lots
                  //       </a>
                  //     </li>
                  //   </ul>
                  // </li>

                  // <li className="nav-item  my-1 py-2 py-sm-0">
                  //   <a
                  //     className="nav-link text-black "
                  //     href="/buyer"
                  //     data-bs-toggle="collapse"
                  //     data-bs-target="#submenu3"
                  //     aria-current="page"
                  //   >
                  //     <i className="bi bi-briefcase"></i>
                  //     <span className="ms-2">Buyer Profile</span>
                  //     <i className="bi bi-arrow-down-short  ms-0 ms-sm"></i>
                  //   </a>

                  //   <ul
                  //     className="nav collapse ms-1 flex-row "
                  //     id="submenu3"
                  //     data-bs-parent="#ParentM"
                  //   >
                  //     <li className="nav-item  ">
                  //       <a
                  //         className="nav-link  text-black text-centre text-sm-start "
                  //         href="/gst"
                  //         aria-current="page"
                  //       >
                  //         Gst
                  //       </a>
                  //     </li>
                  //     <li className="nav-item ">
                  //       <a className="nav-link text-black" href="buyeraddress">
                  //         Addresses
                  //       </a>
                  //     </li>
                  //   </ul>
                  // </li>

                
//                 {/* <Accordion defaultActiveKey="0">
//                     <Card>
//                       <Accordion.Toggle as={Card.Header} eventKey="1">
//                         Lots
//                       </Accordion.Toggle>
//                       <Accordion.Collapse eventKey="1">
//                         <Card.Body>
//                           <NavLink to="/my-lots" activeClassName="active">
//                             My Lots
//                           </NavLink>
//                           <NavLink to="/sold-lots" activeClassName="active">
//                             Sold Lots
//                           </NavLink>
//                         </Card.Body>
//                       </Accordion.Collapse>
//                     </Card>
                   
//                   </Accordion> */}


               
//                 </ul>
//               </div>

//               <div
//                 className={`dropdown open ${navCollapse ? "collapsed" : ""}`}
//               >
//                 <a
//                   className="btn border-none dropdown-toggle-text-black"
//                   type="button"
//                   id="triggerId"
//                   data-bs-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   <i
//                     className={`bi bi-person fs-5 ${
//                       navCollapse ? "d-none" : ""
//                     }`}
//                   />
//                   <span
//                     className={`fs-5 ms-3 d-none  ${
//                       navCollapse ? "d-none" : ""
//                     }`}
//                   >
//                     {" "}
//                     planter
//                   </span>
//                 </a>
//                 <div
//                   className={`dropdown-menu ${navCollapse ? "d-none" : ""}`}
//                   aria-labelledby="triggerId"
//                 >
//                   <a className="dropdown-item" href="buyerprofile">
//                     Profile
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     Logout
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default  buyerSidebar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

const BuyerSidebar = () => {
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
                  <span className="fs-4 text-black">Buyer</span>
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
                      to="/buyerdashboard"
                      className="nav-link text-black text-centre text-sm-start"
                      activeClassName="active"
                    >
                      <i className="bi bi-speedometer2"></i>
                      <span className="ms-2">Dashboard</span>
                    </NavLink>
                  </li>

                  
                  <li className="nav-item ">
                    <NavLink
                      to="/buyeraunction"
                      className="nav-link text-black"
                      activeclassname="active"
                    >
                      <i className="bi bi-grid"></i>
                      <span className="ms-2">Live Auctions</span>
                      <img className="bi bi-arrow-down-short ms-0 ms-sm"></img>
                    </NavLink>
                  </li>

                  <li className="nav-item ">
                    <NavLink
                      to="/productlist"
                      className="nav-link text-black"
                      activeClassName="active"
                    >
                      <i className="bi bi-grid"></i>
                      <span className="ms-2">Product Browsing</span>
                    </NavLink>
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
                      <span className="ms-2">Biddings</span>
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
                          href="/mybiddings"
                          aria-current="page"
                        >
                          My biddings
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link text-black" href="allbiddings">
                          All biddings
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
                      <span className="ms-2">Buyer Profile</span>
                      <i className="bi bi-arrow-down-short  ms-0 ms-sm"></i>
                    </a>

                    <ul
                      className="nav collapse ms-1 flex-row "
                      id="submenu3"
                      data-bs-parent="#ParentM"
                    >
                      <li className="nav-item  ">
                        <a
                          className="nav-link  text-black text-centre text-sm-start "
                          href="/buyergst"
                          aria-current="page"
                        >
                          Gst
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link text-black" href="buyeraddress">
                          Addresses
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item  my-1 py-2 py-sm-0">
                    <NavLink
                      to="/auctionnotifications"
                      className="nav-link text-black"
                      activeClassName="active"
                    >
                      <i className="bi bi-bell"></i>
                      <span className="ms-2">Notifications</span>
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      to="/buyersupport"
                      className="nav-link text-black"
                      activeclassname="active"
                    >
                      <i className="bi bi-grid"></i>
                      <span className="ms-2">Support</span>
                      <img className="bi bi-arrow-down-short ms-0 ms-sm"></img>
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
                    Buyer Name
                  </span>
                </a>
                <div
                  className={`dropdown-menu ${navCollapse ? "d-none" : ""}`}
                  aria-labelledby="triggerId"
                >
                  <NavLink to="/buyerprofile" className="dropdown-item">
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

export default BuyerSidebar;



