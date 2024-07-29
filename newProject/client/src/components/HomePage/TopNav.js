// TopNav.js
import '../../App.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
    return (
        <div className="top-nav">
            <div className="contact-info">
                <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="info">123-456-7890</span>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="info">info@example.com</span>
                </div>
            </div>
        </div>
    );
}

export default TopNav;
