import "./Useind.css";
import { Link } from "react-router-dom";
import linked from './image/linked.svg';
import Twitter from './image/Twitter.svg';
import facebook from './image/facebook.svg';
import useindlogo from "./image/useindlogo.png";


export default function FooterMobile()
{
    return(
        <>
           <div className='Arsia--mobile--view--footer'>
          <img className='Arsia--mobile--view--footer-img' src={useindlogo}></img>
          <div className='Arsia--mobile--view--footer--insta'>
            <img src={linked}></img>
          
           <img src={Twitter}></img>
            <img src={facebook}></img>
          </div>
         
          <p className='Arsia--mobile--view--footer--p1'>Molestie consectetur purus ultrices et proin augue ac. Nisl feugiat turpis dictum neque etiam tempor</p>
       
        
          <Link to={"/"} className='arsia--product--link'><p className='Arsia--mobile--view--footer--p1--2'>Home </p></Link>
          <Link to={"/About-Us"} className='arsia--product--link'><p className='Arsia--mobile--view--footer--p1--2'>About Us</p></Link>
          <Link to={"/Pricing"} className='arsia--product--link'><p className='Arsia--mobile--view--footer--p1--2'>Pricing</p></Link>
          <Link to={"/Contact-Us"} className='arsia--product--link'><p className='Arsia--mobile--view--footer--p1--2'>Contact Us</p></Link>
         
          <p className='Arsia--mobile--view--footer--p1'>© 2023 Useind LLC, All Rights Reserved.</p>
          <p className='Arsia--mobile--view--footer--p1'>Made with ❤️ by  We Reach</p>
        </div>
        </>
    );
}