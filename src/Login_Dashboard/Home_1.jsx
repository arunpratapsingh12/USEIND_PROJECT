import React from 'react';
import close_2 from "../contact/Icon.png";
import search_icon from './images/search.png';
import logo_netflix from './images/Logonetflix 2.png';
import icon_modal from "./images/Avatar.png"
import icon_modal_2 from "./images/Avatar (1).png"
import icon_modal_3 from "./images/Avatar (2).png"
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function Settings() {
    var navigate = useNavigate()
    function goto_pricing() {
        navigate('/Price')
    }

    const [open_sus_popup, setOpen_sus_popup] = React.useState(false);
    const handleOpenPopup = () => setOpen_sus_popup(true);
    const handleClosePopup = () => setOpen_sus_popup(false);
    return (
        <>
            <div className="main_home">
                <h4>My Calls</h4>
                <hr />
                <div className='second_section'>
                    <div className="div1">
                        <h2><span>3</span>/5</h2>
                        <h5>Calls Remaining</h5>
                    </div>
                    <div className="div2">
                        <h3>Current Plan: <span>Free</span> </h3>
                        <h5>Your current plan allows you 5 free support calls. Please upgrade to enjoy seamless support.</h5>
                        <button onClick={goto_pricing}>Upgrade</button>
                    </div>
                </div>
                <div className="third_section">
                    <h3>Call History</h3>
                    <button>Call Support</button>
                </div>
                <hr />
                <div className="dropdowns">
                    <div className="dropdown1">
                        <button className="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Company Name
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <input type="search" class="search" placeholder="Search"></input>
                    <img src={search_icon} alt="" />
                    <div className="dropdown1">
                        <button className="btn dropdown-toggle button_dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Status
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div className="table_section_1">
                    <table>
                        <thead>
                            <tr>
                                <th className="th_1">COMPANY NAMES</th>
                                <th className="th_2">DURATION</th>
                                <th className="th_3">STATUS</th>
                                <th className="th_4">ACTION</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="rows">
                                <td className="td_1">Netflix</td>
                                <td className="td_2">00:00</td>
                                <td className="td_3"><button className='btn1'>Pending</button></td>
                                <td className="td_4"><button className='btn_action' onClick={() => { handleOpenPopup() }}>View</button></td>
                            </tr>
                            <tr className="rows">
                                <td className="td_1">Visa</td>
                                <td className="td_2">00:00</td>
                                <td className="td_3"><button className='btn2'>Not Connected</button></td>
                                <td className="td_4"><button className='btn_action' onClick={() => { handleOpenPopup() }}>View</button></td>
                            </tr>
                            <tr className="rows">
                                <td className="td_1">Amazone</td>
                                <td className="td_2">00:00</td>
                                <td className="td_3"><button className='btn3'>Completed</button></td>
                                <td className="td_4"><button className='btn_action' onClick={() => { handleOpenPopup() }}>View</button></td>
                            </tr>
                            <tr className="rows">
                                <td className="td_1">Paypal</td>
                                <td className="td_2">00:00</td>
                                <td className="td_3"><button className='btn4'>Rejected</button></td>
                                <td className="td_4"><button className='btn_action' onClick={() => { handleOpenPopup() }}>View</button></td>
                            </tr>
                            <tr className="rows">
                                <td className="td_1">HP</td>
                                <td className="td_2">00:00</td>
                                <td className="td_3"><button className='btn3'>Completed</button></td>
                                <td className="td_4"><button className='btn_action' onClick={() => { handleOpenPopup() }}>View</button></td>
                            </tr>
                            <tr className="rows">
                                <td className="td_1">Prime</td>
                                <td className="td_2">00:00</td>
                                <td className="td_3"><button className='btn5'>Draft</button></td>
                                <td className="td_4"><button className='btn_action' onClick={() => { handleOpenPopup() }}>View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <Modal
                        open={open_sus_popup}
                        onClose={handleClosePopup}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="login-signup-popup-3">
                            <div className="img_cross">
                                <img src={close_2} alt='' onClick={handleClosePopup} />
                            </div>
                            <div className='logos'>
                                <img src={logo_netflix} alt="#" />
                                <h3>Call Details</h3>
                                <button>Completed</button>
                            </div>
                            <div className="detail_1">
                                <img src={icon_modal} alt="" />
                                <div className="names">
                                    <h4>Customer Name</h4>
                                    <h5>candice@untitledui.com</h5>
                                </div>
                            </div>
                            <div className="detail_1">
                                <img src={icon_modal_2} alt="" />
                                <div className="names">
                                    <h4>Agent Name</h4>
                                    <h5>demi@untitledui.com</h5>
                                </div>
                            </div>
                            <div className="detail_1">
                                <img src={icon_modal_3} alt="" />
                                <div className="names">
                                    <h4>Time Duration</h4>
                                    <h5>05:00 min</h5>
                                </div>
                            </div>
                            <div className='logos'>
                                <a class='hlink' href="tel:+919999251601"><button id='modal_btn_final'>Need Help</button></a>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    )
}
