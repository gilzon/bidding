import React from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";
const layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
      <Outlet /></div>
      <Footer />
    </>
  );
};

export default layout;
