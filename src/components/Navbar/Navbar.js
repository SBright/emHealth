import React, { useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import img_logo from '../../assets/images/logo.svg';
import img_dropdown_arrow_icon from '../../assets/images/dropdown-arrow.svg';
import { useHistory } from "react-router-dom";

const Navbar = () => {

    const [mobile_menu_open, setMobileMenuOpen] = useState(false);
    const [mobile_sub_menu_service_open, setMobileSubMenuServiceOpen] = useState(false);
    const [mobile_sub_menu_about_open, setMobileSubMenuAboutOpen] = useState(false);

    const history = useHistory();

    const close_mobile_menu = (event) => {
        event.preventDefault(); 
        setMobileMenuOpen(false); 
    }

    return (
        <div className="header-nav">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="navigation">
                            <nav className="navbar navbar-expand-lg navbar-light "> <a onClick={(e) => { e.preventDefault(); history.push('/') }} className="navbar-brand" href="#"> <img src={img_logo} alt="Logo" /> </a>
                                <button onClick={() => setMobileMenuOpen(!mobile_menu_open)} className={(mobile_menu_open ? 'active ' : '') + "navbar-toggler collapsed"} type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation"> <span className="toggler-icon"></span> <span className="toggler-icon"></span> <span className="toggler-icon"></span> </button>
                                <Collapse in={mobile_menu_open}>
                                    <div className={(mobile_menu_open ? 'show ' : '') + "navbar-collapse sub-menu-bar collapse"} id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item active"> <a onClick={(e) => { e.preventDefault(); setMobileSubMenuServiceOpen(!mobile_sub_menu_service_open) }} className="nav-link" href="">Services <img src={img_dropdown_arrow_icon} alt="" /></a>
                                                <Collapse in={mobile_sub_menu_service_open}>
                                                    <ul className="sub-menu" style={mobile_sub_menu_service_open ? { display: 'block' } : {}}>
                                                        <li className=""><a onClick={(e) => { close_mobile_menu(e) }} href="#">emClass</a></li>
                                                        <li className=""><a href="https://emborrow.com/">emBorrow</a></li>
                                                    </ul>
                                                </Collapse>
                                            </li>
                                            <li className="nav-item"> <a onClick={(e) => { e.preventDefault(); setMobileSubMenuAboutOpen(!mobile_sub_menu_about_open) }} className="nav-link" href="#">About Us <img src={img_dropdown_arrow_icon} alt="" /></a>
                                                <Collapse in={mobile_sub_menu_about_open}>
                                                    <ul className="sub-menu" style={mobile_sub_menu_about_open ? { display: 'block' } : {}}>
                                                        <li><a onClick={(e) => { close_mobile_menu(e); history.push('/why-us') }} href="#">Why emHealth</a></li>
                                                        <li><a href="mailto:information@emhealthfertility.com">Contact Us</a></li>
                                                    </ul>
                                                </Collapse>
                                            </li>
                                        </ul>
                                    </div>
                                </Collapse>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;