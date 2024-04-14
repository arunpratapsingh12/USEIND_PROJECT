import './Useind.css';
import '../LoginSignupComponent/index.css';
import React, { useContext, useState } from 'react';
import useindlogo from "./image/useindlogo.png";
import mobileview from './image/mobileview.gif';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import close from '../contact/close.svg';
import close_2 from "../contact/Icon.png";
import triangle_sign from "../contact/image 14.png";
import user_icon from "../Login_Dashboard/images/Rectangle 47.png";
import spam_protection_pdf from "./image/USEIND_ ASM.pdf"

import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext.js";
import axios from "axios";



export default function UseindNavbar() {
  var [susp_email, set_susp_email] = useState("");
  var [user_email, setUserEmail] = useState("");
  var [user_pass, setUserPass] = useState("");
  var navigate = useNavigate();

  // api integration start

  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
   const { userData, login } = useContext(UserContext);

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = () => {
  // Additional password criteria, e.g., at least one uppercase letter, one digit
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  return passwordRegex.test(password);
};

const handleSignUp = async (e) => {
  e.preventDefault();

  if (!validateEmail()) {
    //  setError("Invalid email address");
    alert("Invalid email address");
    return;
  }

  if (!validatePassword()) {
    //  setError(
    //    "Password must be at least 6 characters and include at least one uppercase letter and one digit."
    //  );
    alert(
      "Create a password with 6+ characters, including one uppercase letter and one digit."
    );
    return;
  }

  if (password !== confirmPassword) {
    //  setError("Passwords do not match");
    alert("password don't match");
    return;
  }
  try {


     const formDataToSend = new FormData();
     formDataToSend.append("name", "arun");
     formDataToSend.append("email", email);
     formDataToSend.append("password", password);
    const res = await axios.post(
      `https://useind.com/admin/API/AuthUser/Registration`,
      formDataToSend
    );
    console.log(res.data.status);

    if (res && res.data.status) {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      handleCloseSignup();
      alert("success ",res.data.msg);
      const userData1 = { email: email, password: password };
      login(userData1);
      console.log(userData)

      navigate("/Dashboard_Home");
    } else {
      alert(res.data.msg);
    }
  } catch (error) {
    console.log("error",error);
    alert("error", error);
  }
  };
  

  //login start
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const handleLogin = async (e) => {
 e.preventDefault();
 try {
   //validate
   if (!loginEmail) {
     alert("Please Enter your email");
     return;
   }

   if (!loginPassword) {
     alert("Please Enter your Password");
     return;
   }


       const formDataToSend = new FormData();
       formDataToSend.append("email", loginEmail);
       formDataToSend.append("password", loginPassword);
   const res = await axios.post(
     `https://useind.com/admin/API/AuthUser/Login`,
     formDataToSend
   );

   console.log(res);
   if (res && res.data.status) {
     setloginEmail("");
     setloginPassword("");
     alert(res.data.msg);
     handleClose();
     const userData1 = { email: loginEmail, password: loginPassword };
     login(userData1);
     console.log(userData);

     navigate("/Dashboard_Home");
    
   } else {
     alert(res.data.massage);
   }
 } catch (error) {
   console.log(error);
   alert(error);
 }
  }

  // api integration end

  function mail_input(e) {
    set_susp_email(e.target.value);
  }
  function susp_mail_dwnld_popup() {
    if (susp_email.length >= 1) {
      handleOpenPopup();
    }
  }
  // function getUserDet(e) {
  //   if (e.target.name === "user_email") setUserEmail(e.target.value);
  //   else if (e.target.name === "user_pass") setUserPass(e.target.value);
  // }
  // async function goto_dashboard() {
  //   if (user_email === "user@gmail.com" && user_pass === "user1234") {
  //     localStorage.setItem("login", true);
  //     handleClose();
  //     navigate("/Dashboard_Home");
  //     // useNavigate("/Dashboard")
  //   } else alert("Invalid Username or Password");
  // }
  function log_Out() {
    localStorage.clear();
    navigate("/");
  }
  const [open_sus_popup, setOpen_sus_popup] = React.useState(false);
  const handleOpenPopup = () => setOpen_sus_popup(true);
  const handleClosePopup = () => setOpen_sus_popup(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [showLoginForm, setShowLoginForm] = useState(true);
  // const handleLoginButtonClick = () => {
  //   setShowLoginForm(false);
  // };
  // const handleOTPButtonClick = () => {
  //   setShowLoginForm(true);
  // };

  const [openSignup, setOpenSignup] = React.useState(false);
  const handleOpenSignup = () => setOpenSignup(true);
  const handleCloseSignup = () => setOpenSignup(false);

  return (
    <div>
      <div className="useind--navbar">
        <div className="useind--navbar-1">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <img src={useindlogo}></img>
          </Link>
          <div className="useind--navbar--content--2">
            <div className="useind--navbar--content">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <p>Home</p>
              </Link>
              <Link to={"/About-Us"} style={{ textDecoration: "none" }}>
                <p>About Us</p>
              </Link>
              <Link to={"/Price"} style={{ textDecoration: "none" }}>
                <p>Pricing</p>
              </Link>
              <Link to={"/Contact-Us"} style={{ textDecoration: "none" }}>
                <p>Contact Us</p>
              </Link>
              {localStorage.getItem("userData") ? (
                <div className="user_icon">
                  <div className="dropdown1">
                    <img
                      src={user_icon}
                      alt=""
                      className="dropdown-toggle "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    />
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/Dashboard_Home">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/Dashboard_Settings">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="" onClick={log_Out}>
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="username">
                    <h4>Welcome Back!</h4>
                    <h5>Rishab Israr</h5>
                  </div>
                </div>
              ) : (
                <div>
                  <button className="navbar-signup" onClick={handleOpenSignup}>
                    Sign Up
                  </button>
                  <button className="navbar-login" onClick={handleOpen}>
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="useind--navbar--below">
        <div className="useind--navbar--below--card">
          <div className="useind--navbar--below--card1">
            <div className="useind--navbar--below--card--1">
              <p className="useind--navbar--below--card--1--p1">
                USEIND: PROTECT
              </p>
              <p className="useind--navbar--below--card--1--p1">
                Check Suspicious Email
              </p>
              <p className="useind--navbar--below--card--1--p2">
                Enter the suspicious email.
              </p>
            </div>
            <div className="useind--navbar--below--card--2">
              <input
                type="email"
                name="susp_email"
                placeholder="ENTER E-MAIL ID"
                onChange={mail_input}
              ></input>
              <span>
                <button onClick={susp_mail_dwnld_popup}>Submit</button>
              </span>
            </div>
          </div>
          <div className="useind--navbar--below--card1">
            <div className="useind--navbar--below--card--1">
              <p className="useind--navbar--below--card--1--p1">
                Connect To A Support Line
              </p>
              <p className="useind--navbar--below--card--1--p2-1">
                Get 5 Free Calls
              </p>
            </div>
            <div className="useind--navbar--below--card--2-phone">
              <img src={mobileview}></img>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="login-signup-popup">
            <div className="login-signup-popup-card">
              <img src={close} alt="" onClick={handleClose} />
              <div className="login-signup-popup-card1-1">
                <h1>Login</h1>
                <div className="login-signup-popup-card1">
                  <input
                    type="email"
                    placeholder="Enter Email..."
                    value={loginEmail}
                    onChange={(e) => {
                      setloginEmail(e.target.value);
                    }}
                  ></input>
                  <input
                    type="password"
                    placeholder="Enter Password..."
                    value={loginPassword}
                    onChange={(e) => {
                      setloginPassword(e.target.value);
                    }}
                    required
                  ></input>
                </div>
                <div className="login-signup-popup-card2">
                  <button onClick={handleLogin}>Login</button>
                  <p>
                    Don’t have an account?{" "}
                    <span onClick={handleOpenSignup}>Signup Now</span>
                  </p>
                </div>
              </div>
              {/* {showLoginForm ? (
                <div className="login-signup-popup-card1-1">
                  <h1>Login</h1>
                  <div className="login-signup-popup-card1">
                    <input type='email' placeholder='Enter Email...'></input>
                    <input type='password' placeholder='Enter Password...'></input>
                  </div>
                  <div className="login-signup-popup-card2">
                    <button onClick={handleLoginButtonClick}>Login</button>
                    <p>Don’t have an account? <span onClick={handleOpenSignup}>Signup Now</span></p>
                  </div>
                </div>
              ) : (
                <div className="login-signup-popup-card1-1">
                  <div className='login-signup-otp'>
                    <div className="login-signup-popup-card3">
                      <input type='number' />
                      <input type='number' />
                      <input type='number' />
                      <input type='number' />
                    </div>
                    <div className="login-signup-popup-card2">
                      <button onClick={handleOTPButtonClick}>Submit</button>
                      <p>Resend OTP</p>
                    </div>
                  </div>
                </div>

              )} */}
            </div>
          </Box>
        </Modal>
      </div>

      <div>
        <Modal
          open={openSignup}
          onClose={handleCloseSignup}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="login-signup-popup-1">
            <div className="login-signup-popup-card">
              <img src={close} alt="" onClick={handleCloseSignup} />

              <div className="login-signup-popup-card1-1">
                <h1>Sign Up</h1>
                <div className="login-signup-popup-card1">
                  <input
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                  <input
                    type="password"
                    placeholder="Enter Password..."
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  ></input>
                  <input
                    type="password"
                    placeholder="Confirm Password..."
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    required
                  ></input>
                </div>
                <div className="login-signup-popup-card2">
                  <button onClick={handleSignUp}>Sign Up</button>
                  <p>
                    Already have an account?
                    <span onClick={handleOpen}>Login Now</span>
                  </p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>

      <div>
        <Modal
          open={open_sus_popup}
          onClose={handleClosePopup}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="login-signup-popup-2">
            <div className="img_cross">
              <img src={close_2} alt="" onClick={handleClosePopup} />
            </div>
            <div className="sus_sign">
              <img src={triangle_sign} alt="" />
              <h4>
                This email might be suspicious! Please download our{" "}
                <span>Scam Identification Kit</span> for FREE.
              </h4>
              <a href={spam_protection_pdf} target="blank">
                <button>Download SCAM Identification KIT</button>
              </a>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}