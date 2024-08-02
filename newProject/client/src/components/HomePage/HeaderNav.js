import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Link, useLocation } from 'react-router-dom';
// import logo from 'images/logo.jpg';
import { FaBars } from 'react-icons/fa';

const HeaderNav = () => {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const logo='images/logo.jpg'
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const getActiveClass = (path) => location.pathname === path ? 'active' : '';

    return (
        <div>
            <nav className={`navbar ${scroll ? 'white-background' : ''} `}>
                {/* <div className='logo-position'>
                    <img src={process.env.PUBLIC_URL + logo} alt='clg-logo' className='clg-logo'/>
                </div> */}
                <div className={`ul ${menuOpen ? 'show' : ''}`}>
                    <button className={getActiveClass('/')}><Link to="/" className='navigation-links'>Home</Link></button>
                    <button className={getActiveClass('/aboutCollege')}><Link to="/aboutCollege" className='navigation-links'>AboutUs</Link></button>
                    <button className={getActiveClass('/admissions')}><Link to="/admissions" className='navigation-links'>Admissions</Link></button>
                    <button className={getActiveClass('/courses')}><Link to="/courses" className='navigation-links'>Courses</Link></button>
                    <button className={getActiveClass('/campusLife')}><Link to="/campusLife" className='navigation-links'>Campus Life</Link></button>
                    <button className={getActiveClass('/noticeBoard')}><Link to="/noticeBoard" className='navigation-links'>Notice Board</Link></button>
                    <button className={getActiveClass('/contactUs')}><Link to="/contactUs" className='navigation-links'>ContactUs</Link></button>
                </div>
                <div className='menu-icon' onClick={toggleMenu}>
                    <FaBars />
                </div>
            </nav>
        </div>
    );
}

export default HeaderNav;
