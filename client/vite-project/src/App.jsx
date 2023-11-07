import React from "react";
// import { useEffect,useState } from 'react';
import "./App.css";
import Layout from "./components/layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/user/login";
import Signup from "./pages/user/signup";
//admin routes
import AdminLogin from "./pages/admin/adminLogin";
import AdminPanel from "./pages/admin/adminPanel";
import AdminLayout from "./components/adminLayout";
import ProductManage from "./pages/admin/productManagement";
//user routes
import Home from "./pages/home";
import Dashboard from "./pages/user/dashboard";
import Aunction from "./pages/user/aunction";
import Lots from "./pages/user/lots";
import Buyer from "./pages/buyer";
import Address from "./pages/user/address";
import Support from "./pages/user/support";
import Gst from "./pages/user/gst";
import Soldlots from "./pages/user/soldlots";
import Settings from "./pages/user/settings";

import Profile from "./pages/user/profile";
import Header from "./components/header";
//buyer routes
import BuyerLogin from "./pages/buyer/buyerLogin";
import BuyerAddress from "./pages/buyer/buyerAddress";
import BuyerDashboard from "./pages/buyer/buyerDashboard";
import BuyerSettings from "./pages/buyer/buyerSettings";
import BuyerProfile from "./pages/buyer/buyerProfile";
import BuyerLayout from "./components/buyerLayout";
import BuyerAunction from "./pages/buyer/aunction";
import AllBiddings from "./pages/buyer/allbiddings";
import ProductList from "./pages/buyer/productlist";
import MyBiddings from "./pages/buyer/mybiddings";
import BuyerGst from "./pages/buyer/buyergst";
import BuyerSupport from "./pages/buyer/buyersupport";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Check if the user is already logged in
  //   setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  // }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route index element={isLoggedIn ? <Layout /> : <Login />} /> */}
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/auction" element={<Aunction />} />
          <Route path="lots" element={<Lots />} />
          <Route path="buyer" element={<Buyer />} />
          <Route path="address" element={<Address />} />
          <Route path="support" element={<Support />} />
          <Route path="Gst" element={<Gst />} />
          <Route path="Soldlots" element={<Soldlots />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<BuyerLayout />}>
          <Route path="buyerdashboard" element={<BuyerDashboard />} />
          <Route path="buyersettings" element={<BuyerSettings />} />
          <Route path="buyerprofile" element={<BuyerProfile />} />
          <Route path="buyeraddress" element={<BuyerAddress />} />
          <Route path="buyeraunction" element={<BuyerAunction />} />
          <Route path="allbiddings" element={<AllBiddings />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="mybiddings" element={<MyBiddings />} />
          <Route path="buyergst" element={<BuyerGst />} />
          <Route path="buyersupport" element={<BuyerSupport />} />
        </Route>

        <Route path="/" element={<AdminLayout />}>
          <Route path="adminpanel" element={<AdminPanel />} />
          <Route path="productmanage" element={<ProductManage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="adminlogin" element={<AdminLogin />} />

        <Route path="buyerlogin" element={<BuyerLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//how to   add axios to connect  to my backend here ?
