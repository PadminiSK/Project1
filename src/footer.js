import React from "react";
import footer from './images/footer-logo-white.svg';

const Footer = () => (
    <div className="footer" style={{bottom:"0px",backgroundColor:"#007cba",width:"100%",position:"absolute",color:"white",textAlign:"center"}}>
        
        <p> <img src={footer} alt="" width="auto" height="24px"/> Copyright Maveric Systems Ltd 2021</p>
    </div>
);

export default Footer;