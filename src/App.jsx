import React from "react";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Landing_page/Home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import ConfirmRegistration from "./pages/auth/ConfirmRegistration";
import ForgotPassword from "./pages/auth/ForgetPassword";
import Profile from "./pages/Dashboard/Profile";
import NotFound from "./pages/NotFound";
import Buy from "./pages/Dashboard/Buy";
import Sell from "./pages/Dashboard/Sell";
import PropertiesDetails from "./pages/Dashboard/PropertiesDetails";
import Listings from "./pages/Landing_page/Listings";

const App = () => {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/confirm-registration"
            element={<ConfirmRegistration />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/property:id" element={<PropertiesDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
   
    </>
  );
};

export default App;
