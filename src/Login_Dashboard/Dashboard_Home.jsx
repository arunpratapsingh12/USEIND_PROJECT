import React from 'react';
import './style.css'
import UseindNavbar from '../Useind--file/Useind_web_Navbar';
import UseindHeaderMobile from '../Useind--file/Useind_Mobile_Header';
import FooterMobile from '../Useind--file/Useind_Mobile_footer';
import UseindFooter from '../Useind--file/Useind_web_footer';
import Left_Nav from './Left_Nav';
import Settings from './Settings';
import Home_1 from './Home_1';

export default function Dash_board() {
    return (
        <div>
            <div className='navbar_web'><UseindNavbar /></div>
            <div className='navbar_mobile'><UseindHeaderMobile /></div>

            <div className="container-fluid dashboard_home">
                <div className="row">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-12"><Left_Nav /></div>
                        <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-8 col-12"><Home_1 /> </div>
                    </div>
                </div>
            </div>
            <div className='footer_mobile'><FooterMobile /></div>
            <div className='footer_web'><UseindFooter /></div>

        </div>
    )
}
