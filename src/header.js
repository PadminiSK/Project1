import React from "react";
import logo from './images/logo.png';

const Header = () => (
    <div className="header">
        <img src={logo} alt="" width="auto" height="48px" style={{padding:"12px"}}/>
    </div>
);

export default Header;