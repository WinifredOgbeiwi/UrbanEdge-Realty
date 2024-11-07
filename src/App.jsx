import React from "react";
import Navbar from "./components/layouts/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Landing_page/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ConfirmRegistration from "./pages/auth/ConfirmRegistration";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Profile from "./pages/Dashboard/Profile";
import NotFound from "./pages/NotFound";
import Buy from "./pages/Dashboard/Buy";
import Sell from "./pages/Dashboard/Sell";
import PropertiesDetails from "./pages/Dashboard/PropertiesDetails";
import Listings from "./pages/Landing_page/Listings";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./routes/PrivateRoute";
import { ROUTES } from "./utils/routes";
const App = () => {
  const location = useLocation();
  const showNavbar = [ROUTES.HOME, ROUTES.LISTINGS];

  const shouldShowNavbar = showNavbar.includes(location.pathname);

  return (
    <>
     {shouldShowNavbar &&  <Navbar /> }

      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LISTINGS} element={<Listings />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ForgotPassword />} />
        <Route
          path={ROUTES.CONFIRM_REGISTRATION}
          element={<ConfirmRegistration />}
        />
        <Route element={<PrivateRoute />}>
          <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Route>

        <Route path={ROUTES.BUY} element={<Buy />} />
        <Route path={ROUTES.SELL} element={<Sell />} />
        <Route path={ROUTES.PROPERTY} element={<PropertiesDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
