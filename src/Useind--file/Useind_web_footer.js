import './Useind.css';
import useindlogo from "./image/useindlogo.png";
import linked from './image/linked.svg';
import Twitter from './image/Twitter.svg';
import facebook from './image/facebook.svg';
import { Link } from "react-router-dom";


export default function UseindFooter()
{
    return(
        <div>
             <div className="useind--footer">
         <div className="useind--footer--card">
            <div className="useind--footer--card1">
              <img src={useindlogo}></img>
             <p>We're committed to keeping you safe from online threats and fraudulent schemes. USEIND offers a comprehensive suite of tools, resources, and expert guidance to empower you in navigating the digital landscape securely.
</p>
             <div className="useind--footer--card--8">
              <img src={linked}></img>
              <img src={Twitter}></img>
              <img src={facebook}></img>
             </div>
            </div>
            <div className="useind--footer--card2">
                <div className="useind--footer--card2-1">
                  <p className="useind--footer--card2-1--p">Get Connected</p>
                  <p  className="useind--footer--card2-1--p1">Services</p>
                  <p className="useind--footer--card2-1--p1">Blog</p>
                  <p className="useind--footer--card2-1--p1">Newsletter</p>
                </div>
                <div className="useind--footer--card2-1">
                  <p className="useind--footer--card2-1--p">Services</p>
                  <p  className="useind--footer--card2-1--p1">Features</p>
                  <p  className="useind--footer--card2-1--p1">Integrations</p>
                 
                  <p  className="useind--footer--card2-1--p1">Pricing</p>
                  
                  <p  className="useind--footer--card2-1--p1">Roadmap</p>
                </div>
            </div>
         </div>
      </div>
      <div className="useind--footer--1">
      <div className="useind--footer--2">
        <div className="useind--footer--2--card">
           <p>Privacy Policy</p>
           <p>Terms of Use</p>
        </div>
        <p>© 2023 Useind LLC, All Rights Reserved. Made with ❤️ by We Reach</p>
        </div>
      </div>
        </div>
    );
}