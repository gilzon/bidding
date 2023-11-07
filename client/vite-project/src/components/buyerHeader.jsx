import React from "react";
import { Link } from "react-router-dom";

// import Logo from '../assets/logo/Default_0_91827c05-b4f3-40d4-96dc-c62098cc90d6_1-transformed (1).png'
import { FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import Settings from "../pages/user/settings";

import { useNavigate } from "react-router-dom"

const  buyerHeader = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate =  useNavigate();

  const handleIconClick=(route)=>{
  navigate.push(route);
  }
  // const sidebar = () => {
    // const [navCollpase, setNavCollapse] = useState(false);
    // const [smallNavCollpase, setSmallNavCollapse] = useState(false);
  return (
    
    // <section className={`$ {smallNavCollpase ? " smallNav " : ""} sidebar { ${navCollpase ? "navCollapse" : ""}`}>
    <header className="header-top fixed-top">
      <div className="container-xxxl">
        <div className="row">
          <div className="col-6 d-flex justify-content-between">
            <h1 className="nametag d-flex justify-content-between">HOP</h1>
            {/* <img className='logo' src={Logo} alt="" /> */}
             {/* <i className=" hamburger-button bi bi-list largeDeviceIcon "onClick={e => setNavCollapse (!navCollpase)} />
                <i className=" hamburger-button bi bi-list smallDeviceIcon "onClick={e => setSmallNavCollapse (!smallNavCollpase)} />   */}
          </div>

          <div className="user-pro col-6 d-flex align-items-center ">
         
            <div className="header-buttons d-flex justify-content-around mt-4 "><Link to='buyerProfile' >{<FaUserCircle className="profile-icon fs-3 "  onClick={() => handleIconClick('profile')}/>}</Link></div>
             <div className="d-flex"><Link to='buyerSettings'>{<FiSettings className="setting-icon" onClick={() => handleIconClick('settings')}/>}</Link>
             </div>
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default buyerHeader;
