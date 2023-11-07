import React from "react";

import Footer from "./footer";
import BuyerSidebar from "./buyerSidebar";
import { Outlet } from "react-router-dom";
import BuyerHeader from "./buyerHeader";
const buyerLayout = () => {
  return (
    <>
      <BuyerHeader />
      <BuyerSidebar />
      <div className="page-wrapper">
      <Outlet /></div>
      <Footer />
    </>
  );
};

export default buyerLayout;
