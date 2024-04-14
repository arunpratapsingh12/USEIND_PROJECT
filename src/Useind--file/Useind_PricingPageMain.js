import React from 'react'
import "./Useind_Price.css"
import UseindNavbar from './Useind_web_Navbar'
import UseindHeaderMobile from './Useind_Mobile_Header'
import FooterMobile from './Useind_Mobile_footer'
import UseindFooter from './Useind_web_footer'
import Useind_Price_Comp from './Useind_Price_Comp'

export default function Useind_PricingPageMain() {
    return (<div>
        <div className='navbar_web'><UseindNavbar /></div>
        <div className='navbar_mobile'><UseindHeaderMobile /></div>
        <Useind_Price_Comp />
        <div className='footer_mobile'><FooterMobile /></div>
        <div className='footer_web'><UseindFooter /></div>

    </div>
    )
}
