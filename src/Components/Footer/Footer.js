import React from "react";
import Newsletter from "./Newsletter";

const Footer = () => {
    return (
        <div className="FooterSection">
            <div className="foot-container">
                <div>
                <b>Contact Us</b>
                <p>Email: dogsurfing@gmail.com</p>
                </div>
                <div>
                    <Newsletter />
                </div>
                <div>
                    <p> Copyright Dog Surfing International 2024 </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;