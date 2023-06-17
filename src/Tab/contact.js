import React from "react";
import Illustration from './Documents/contact.png'
import { Call, LocationOn, Mail, } from "@mui/icons-material";


export default function Contact() {
    return (
        <>
        <div className="skillstitle">
        <h1>
            <span style={{ color: '#ff9f43' }}>C</span>
            <span style={{ color: '#0abde3' }}>on</span>
            <span style={{ color: '#ee5253' }}>ta</span>
            <span style={{ color: '#00d2d3' }}>ct</span>
        </h1>
        </div>
        <div className="contact-main">
            <div className="contact-text">
                <h1><span><Call/></span>Contact<span></span></h1>
                <a href="tel:+916361161836">6361161836</a>
                <h1><span><Mail/></span>Mail<span></span></h1>
                <a href="mailto:prashanthprashanth8585@gmail.com">prashanthprashanth8585@gmail.com</a>
                <h1><span><LocationOn/></span>Address<span></span></h1>
                <p>Kuthappanahalli village, Chintamani Taluk, Chikkaballapura District, Karnataka, 563159</p>
            </div>
            <div>
                <img src={Illustration} alt="" ></img>
            </div>
        </div>
        </>
    )
}