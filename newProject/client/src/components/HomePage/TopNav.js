// TopNav.js
import '../../App.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TopNav = () => {
    return (
        <div className="top-nav">
            <div className="contact-info">
                <div className='contact-info-flex'>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="info">+91 8805488695 / 9307979642</span>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="info">collegeofagriamkheda@gmail.com</span>
                    </div>
                </div>
                <div className='contact-item'>college code : 11296</div>
            </div>
        </div>
    );
}

export default TopNav;
