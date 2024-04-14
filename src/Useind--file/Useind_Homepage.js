import "./Useind.css";
import UseindHomepageCarousal from "./UseindCarousal";
import frame from "./image/frame.svg";
import samsung from './image/Samsung.svg';
import order from './image/order.svg';
import profile from './image/profile.svg';
import UseindNavbar from "./Useind_web_Navbar";
import UseindFooter from "./Useind_web_footer";
import logo from './image/logo.gif';
import UseindHeaderMobile from "./Useind_Mobile_Header";
import img1 from './image/img1.svg';
import img3 from './image/img3.svg';
import img2 from './image/img2.png';
import FooterMobile from "./Useind_Mobile_footer";


export default function UseindHomepage() {

  return (
    <div>
      {/* ---Useind--Navbar--- */}
      <div className="Useind--navbar--web--view">
        <UseindNavbar />
      </div>
      <div className="Useind--navbar--mobile--view">
        <UseindHeaderMobile />
      </div>
      <UseindHomepageCarousal />
      <div className="useing--protection--frame">
        <p className="useing--protection--frame--1">
          Protect yourself through USEIND
        </p>
        <p className="useing--protection--frame--2">
          That’s a step by step procedure.
        </p>
        <img src={frame}></img>
      </div>
      <div className="useind--steps--card">
        <div className="useind--steps--card--1">
          <div className="useind--steps--card--1--4">
            <img src={img1}></img>
          </div>
          <div className="useind--steps--card--1--2">
            <p className="useind--steps--card--1--2--p1">Step 01</p>
            <p className="useind--steps--card--1--2--p2">
              Call toll free number
            </p>
          </div>
        </div>
        <div className="useind--steps--card--1">
          <div className="useind--steps--card--1--4">
            <img src={img2}></img>
          </div>
          <div className="useind--steps--card--1--2">
            <p className="useind--steps--card--1--2--p1">Step 02</p>
            <p className="useind--steps--card--1--2--p2">
              We connect you to Amazon, HP, eBay, Microsoft, Apple support
            </p>
          </div>
        </div>
        <div className="useind--steps--card--1">
          <div className="useind--steps--card--1--4">
            <img src={img3}></img>
          </div>
          <div className="useind--steps--card--1--2">
            <p className="useind--steps--card--1--2--p1">Step 03</p>
            <p className="useind--steps--card--1--2--p2">
              We transcribe your calls privately so no one can see them except
              you
            </p>
          </div>
        </div>
      </div>
      <div className="useing--protection--frame">
        <p className="useing--protection--frame--1">
          Protect yourself through USEIND
        </p>
        <p className="useing--protection--frame--2">
          That’s a step by step procedure.
        </p>
        <div className="useind--all--coin--based--row">
          <img src={logo}></img>
        </div>
      </div>
      <div className="useind--samsung--image1">
        <div className="useind--samsung--image">
          <div className="useind--samsung--image--1">
            <img src={samsung}></img>
          </div>

          <div className="useind--samsung--content">
            <div className="useind--samsung--content--1">
              <p className="useind--samsung--content--1--p1">What can we help you with?</p>
              <p className="useind--samsung--content--1--p2">USEIND is here for safeguarding your Amazon experience, providing constant assistance to ensure security and guaranteed assurance against online scams.
              </p>
            </div>
            <div className="useind--samsung--content--1">
              <img src={order}></img>
              <p className="useind--samsung--content--1--p3">Order Related Help</p>
              <p className="useind--samsung--content--1--p2">Stay secure with USEIND. Your scam protection ally is here for your all Amazon related help. Count on us for Amazon order assistance, ensuring a safe buy, return & exchange experience.
              </p>
            </div>
            <div className="useind--samsung--content--1">
              <img src={profile}></img>
              <p className="useind--samsung--content--1--p3">Account Related Help</p>
              <p className="useind--samsung--content--1--p2">Your shield against Amazon scams. Here to provide security and assistance for all your Amazon account needs like password, login info, previous orders and much more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="useind--samsung--image1--mobile">
        <div className="useind--samsung--image--mobile">
          <div className="useind--samsung--image--1">
            <img src={samsung}></img>
          </div>

          <div className="useind--samsung--content">
            <div className="useind--samsung--content--1">
              <p className="useind--samsung--content--1--p1">What can we help you with?</p>
              <p className="useind--samsung--content--1--p2">USEIND is here for safeguarding your Amazon experience, providing constant assistance to ensure security and guaranteed assurance against online scams.</p>
            </div>
            <div className="useind--samsung--content--1">
              <img src={order}></img>
              <p className="useind--samsung--content--1--p3">Order Related Help</p>
              <p className="useind--samsung--content--1--p2">Stay secure with USEIND. Your scam protection ally is here for your all Amazon related help. Count on us for Amazon order assistance, ensuring a safe buy, return & exchange experience.</p>
            </div>
            <div className="useind--samsung--content--1">
              <img src={profile}></img>
              <p className="useind--samsung--content--1--p3">Account Related Help</p>
              <p className="useind--samsung--content--1--p2">Your shield against Amazon scams. Here to provide security and assistance for all your Amazon account needs like password, login info, previous orders and much more.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Useind--navbar--web--view">
        <UseindFooter />
      </div>
      <div className="Useind--navbar--mobile--view">
        <FooterMobile />
      </div>


    </div>
  );
}
