import './Useind.css';
import '../LoginSignupComponent/index.css';
import React , { useState, useRef,useEffect } from 'react';
import { Link } from "react-router-dom";
import useindlogo from "./image/useindlogo.png";
import search1 from './image/search1.png';
import cross from './image/cross.svg';
import navbar from './image/navbar.svg';
import back from './image/back.png';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import close from '../contact/close.svg';

export default function UseindHeaderMobile()

{
    const [isSearchCardOpen, setIsSearchCardOpen] = useState(false);
    const handleSearchIconClick = () => {
      setIsSearchCardOpen(!isSearchCardOpen); 
    };
    const handleArrowLeftClick = () => {
      setIsSearchCardOpen(!isSearchCardOpen); 
    };
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const showSidebar = () => {
      setSidebarVisible(true);
    };
    const hideSidebar = () => {
      setSidebarVisible(false);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [showLoginForm, setShowLoginForm] = useState(true);
    const handleLoginButtonClick = () => {
      setShowLoginForm(false);
    };
    const handleOTPButtonClick = () => {
      setShowLoginForm(true);
    };
  
    const [openSignup, setOpenSignup] = React.useState(false);
    const handleOpenSignup = () => setOpenSignup(true);
    const handleCloseSignup = () => setOpenSignup(false);
  
    return(
        <div>
            <div className='Arsia--header--1'>
             
            </div>
        {isSearchCardOpen ? (
          <div className='Arsia--Navbar--search--1'>
              <img className='Arsia--Navbar--search--1--back' src={back} alt='Arrow Left' onClick={handleArrowLeftClick}></img>
          <div className='Arsia--Navbar--search--1--2'>
              <input placeholder='Search...'></input>
              <img src={search1} alt='Search'></img>
            </div>
          </div>
        ) : (
          <div className='Arsia--Navbar'>
            <div className='Arsia--Navbar-1'>
              <div className='Arsia--Navbar-1--8'>
                <div>
                  <img
                    className='Arsia--Navbar-1--img1'
                    onClick={showSidebar}
                    src={navbar}
                    alt='Navbar'
                  />
                  <nav>
                    <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                      <li>
                        <div className='Arsia--ham--profile'>
                          <div className='Arsia--ham--profile--p'>
                          <img src={useindlogo}></img>
                          
                          </div>
                          <img className='Arsia--ham--profile--img--cross' onClick={hideSidebar} src={cross} alt='Close' />
                        </div>
                      </li>
                      <li>
                        <div className='Arsia--ham--content'>
                          <div className='Arsia--ham--content1'>
                            <div className='Arsia--ham--content--1'>
                              {/* <img src={home}></img> */}
                              <Link to={"/"} className='arsia--product--link'>
                              <p>Home</p>
                              </Link>
                            </div>
                            <div className='Arsia--ham--content--border--line'></div>
                            <div className='Arsia--ham--content--1'>
                               <Link to={"/About-Us"} className='arsia--product--link'>
                                <p>About Us</p>
                              </Link>
                            </div>
                            <div className='Arsia--ham--content--border--line'></div>
                            <div className='Arsia--ham--content--1'>
                               <Link to={"/Price"} className='arsia--product--link'>
                                <p>Pricing</p>
                              </Link>
                            </div>
                            <div className='Arsia--ham--content--border--line'></div>
                            <div className='Arsia--ham--content--1'>
                               <Link to={"/Contact-Us"} className='arsia--product--link'>
                                <p>Contact Us</p>
                              </Link>
                            </div>
                        </div>
                         
                          {/* <div className='Arsia--ham--content1'>
                          
                             <div className='Arsia--ham--content--border--line'></div>
                            <div className='Arsia--ham--content--1'>
                           
                              <p>Contact us</p>
                            </div>
                            <div className='Arsia--ham--content--border--line'></div>
                         
                           
                          </div> */}
                         
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
                <Link to={"/"} className='arsia--product--link'>
                <img className='Arsia--Navbar-img' src={useindlogo} alt='Logo'></img>
                </Link>
              </div>
            </div>
            <div className='Arsia--icon1'>
             <p onClick={handleOpen}>Login</p>
             <p onClick={handleOpenSignup}>Signup</p>
             <img src={search1} alt='Search' onClick={handleSearchIconClick}></img>
           
            </div>
          </div>
        )}

<div>
    <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Box className="login-signup-popup">
      <div className="login-signup-popup-card">
         <img src={close} alt='' onClick={handleClose} />
         {showLoginForm ? (
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
        
      )}
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
         <img src={close} alt='' onClick={handleCloseSignup} />
      
        <div className="login-signup-popup-card1-1">
          <h1>Sign Up</h1>
          <div className="login-signup-popup-card1">
            <input type='email' placeholder='Enter Email...'></input>
            <input type='password' placeholder='Enter Password...'></input>
            <input type='password' placeholder='Confirm Password...'></input>
          </div>
          <div className="login-signup-popup-card2">
            <button>Sign Up</button>
            <p>Already have an account?<span onClick={handleOpen}>Login Now</span></p>
          </div>
        </div>
    
       
      </div>
     </Box>
   </Modal>
 </div>
         </div>
      
    );
}