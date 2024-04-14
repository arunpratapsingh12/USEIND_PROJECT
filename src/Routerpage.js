import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import UseindHomepage from "./Useind--file/Useind_Homepage";
import UseindAboutUs from "./Useind--file/UseindAbout";
import ContactPage from "./contact";
import Dash_board from "./Login_Dashboard/Dash_board";
import Dashboard_Home from "./Login_Dashboard/Dashboard_Home";
import Useind_PricingPageMain from "./Useind--file/Useind_PricingPageMain";
import { UserContext } from "./context/UserContext";







function Routerpage() {
    const { userData } = useContext(UserContext);
    console.log(userData)

    return (
      <Router>
        <div className="router-page">
          <Routes>
            <Route path="/" element={<UseindHomepage />}></Route>
            <Route path="/About-Us" element={<UseindAboutUs />}></Route>
            <Route path="/Contact-Us" element={<ContactPage />}></Route>
            <Route path="/Price" element={<Useind_PricingPageMain />}></Route>
            <Route path="/Dashboard_Settings" element={<Dash_board />}></Route>
            <Route
              path="/Dashboard_Home"
              element={userData ? <Dashboard_Home /> : <Navigate to="/" /> }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
}
export default Routerpage;