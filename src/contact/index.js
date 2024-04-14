import React from 'react'
import img from './img.svg';
import './index.css';
import UseindNavbar from '../Useind--file/Useind_web_Navbar';
import UseindHeaderMobile from '../Useind--file/Useind_Mobile_Header';
import UseindFooter from '../Useind--file/Useind_web_footer';
import FooterMobile from '../Useind--file/Useind_Mobile_footer';

function ContactPage() {
  return (
    <div>
       <div className="Useind--navbar--web--view">
       <UseindNavbar/>
      </div>
      <div className="Useind--navbar--mobile--view">
       <UseindHeaderMobile/>
      </div>
      <div className='Contactus-page-card1'>
      <div className='Contactus-page-card'>
        <div className='Contactus-page-card-1'>
          <img src={img}></img>
        </div>
        <div className='Contactus-page-card-2'>
          <h1>Talk To An Expert</h1>
          <form className='contactus-page-card-content'>
            <div className='contactus-page-card-content1'>
            <label>Full Name</label>
            <input type='text'></input>
            </div>
            <div className='contactus-page-card-content1'>
            <label>Email</label>
            <input type='email'></input>
            </div>
            <div className='contactus-page-card-content1'>
            <label>Contact No.</label>
            <input type='number'></input>
            </div>
            <div className='contactus-page-card-content1'>
            <label>Message</label>
            <textarea id="w3review" name="w3review" ></textarea>

            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
      </div>
      <div className="Useind--navbar--web--view">
       <UseindFooter/>
      </div>
      <div className="Useind--navbar--mobile--view">
       <FooterMobile/>                                                                                                                                                                                                     
      </div>
    </div>
  )
}

export default ContactPage
