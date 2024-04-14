import React from 'react';
import "./Useind_Price.css"
import check_icon from "./image/checkmark 1.png"
import check_icon_2 from "./image/checkmark 2.png"

export default function Useind_Price_Comp() {
  return (
    <div className="pricing_page">
            <div className="heading_section">
                <h2>Ready to get started?</h2>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                {/* <div className="line_3">
                    <h5>Monthly</h5>
                    <img src={img1} />
                    <h5 id="yearly">Yearly</h5>
                    <h6>20% OFF</h6>
                </div> */}
            </div>
            <div className="pricing_package_section">
                <div className="card_base_div">
                    <div className="card_base">
                        <h3>Free Support Engine</h3>
                        <h4>For new users</h4>
                        <h2>FREE</h2>
                        <button className="btn_1">FREE PLAN</button>
                        <h5>Base plan includes:</h5>
                        <div className="item"><img src={check_icon}></img><h6>Free support calls </h6></div>
                        <div className="item"><img src={check_icon}></img><h6>Call history </h6></div>
                        <div className="item"><img src={check_icon}></img><h6>Limited human assistance </h6></div>
                        <div className="item"><img src={check_icon}></img><h6>Limited connectivity </h6></div>
                        <div className="item"><img src={check_icon}></img><h6>Limited number of queries</h6></div>
                    </div>
                        <button className="btn_2">Includes Scam identification Kit</button>
                </div>
                <div className="card_base_div card_pro_div">
                    <div className="card_base card_pro">
                        <h3>Anti-Scam Module</h3>
                        <h4>For professionals</h4>
                        <h2><span id="span_1">$</span>189.99<span id="span_2">/year</span> </h2>
                        <button className="btn_3">Upgrade</button>
                        <h5>Everything in Base, plus:</h5>
                        <div className="item"><img src={check_icon}></img><h6>Basic trouble shooting for devices</h6></div>
                        <div className="item"><img src={check_icon}></img><h6>Chat support </h6></div>
                        <div className="item"><img src={check_icon}></img><h6>Unlimited human assistance </h6></div>
                        <div className="item"><img src={check_icon}></img><h6>Unlimited connectivity </h6></div>
                        <div className="item"><img src={check_icon}></img><h6>Unlimited number of queries </h6></div>
                    </div>
                        <button className="btn_4">Includes Preventive Anti-Scam Module</button>
                </div>
            </div>
            <div className="text_below_pricing_section">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
             
            <div className="table_section">
                <table>
                    <thead>
                        <tr>
                            <th className="th_1">OVERVIEW</th>
                            <th className="th_2">BASE</th>
                            <th className="th_3">PRO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="rows">
                            <td className="td_1">Human assistance</td>
                            <td className="td_2">5 Calls</td>
                            <td className="td_3"> <img className="check_icon_2" src={check_icon_2}/></td>
                        </tr> 
                        <tr className="rows">
                            <td className="td_1">Unlimited member of queries</td>
                            <td className="td_2">5 Queries</td>
                            <td className="td_3"> <img className="check_icon_2" src={check_icon_2}/></td>
                        </tr>
                        <tr className="rows">
                            <td className="td_1">Chat support</td>
                            <td className="td_2"></td>
                            <td className="td_3"> <img className="check_icon_2" src={check_icon_2}/></td>
                        </tr>
                        <tr className="rows">
                            <td className="td_1">Connectivity</td>
                            <td className="td_2">Limited</td>
                            <td className="td_3">Unlimited</td>
                        </tr>
                        <tr className="rows">
                            <td className="td_1">Basic troubleshooting for device</td>
                            <td className="td_2"></td>
                            <td className="td_3"> <img className="check_icon_2" src={check_icon_2}/></td>
                        </tr>
                        <tr className="rows">
                            <td className="td_1">Anti - Scam modale CA guidance by</td>
                            <td className="td_2"></td>
                            <td className="td_3"> <img className="check_icon_2" src={check_icon_2}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}
