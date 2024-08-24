import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <>
            <footer>
                <hr/>
                <p className="footText">&copy; Developer Funnel 2024</p>
                <hr/>
                <div className="footDiv">
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footDiv">
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footDiv noBorder">
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;