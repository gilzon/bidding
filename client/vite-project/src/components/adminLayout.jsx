import React from "react";

import Footer from "./footer";

import { Outlet } from "react-router-dom";
import BuyerHeader from "./buyerHeader";
import AdminSidebar from "./adminSidebar";
const adminLayout = () => {
  return (
    <>
      <BuyerHeader />
      <AdminSidebar />
      <div className="page-wrapper">
      <Outlet /></div>
      <Footer />
    </>
  );
};

export default adminLayout;
