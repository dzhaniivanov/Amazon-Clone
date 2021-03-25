import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <div className="footerarea">
            <div className="footerarea_top">
                <p>Back to Top</p>
            </div>
            <div className="footerarea__links">
                <div className="footerarea__linkarea">
                    <span>About Amazon</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Make money with Us</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Amazon Payment Products</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Let us Help You</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;