import React from 'react'
import logo from '../../images/logo.jpg'
function NavigationBar() {
  return (
    <div className='navigation-bar'>
        <div>
            <img src={logo} className='nav-logo'/>
        </div>
        <div>
            <ul className='ul'>
                <li className='li'> <a href='#'>Home</a></li>
                <li className='li'> <a href='#'>About Us</a></li>
                <li className='li'> <a href='#'>Admissions</a></li>
                <li className='li'> <a href='#'>Courses</a></li>
                <li className='li'> <a href='#'>Campus Life</a>
                    <ul className='ul dropdown'>
                        <li className='li'><a href='#'>Activities</a></li>
                        <li className='li'><a href='#'>Events</a></li>
                        <li className='li'><a href='#'>Educational Tour</a></li>
                        <li className='li'><a href='#'>Laboratory</a></li>
                        <li className='li'><a href='#'>Hostel</a></li>
                        <li className='li'><a href='#'>Wifi Campus</a></li>
                        <li className='li'><a href='#'>Sports</a></li>
                    </ul>                
                </li>
                <li className='li'> <a href='#'>Notice Board</a></li>
                <li className='li'> <a href='#'>Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavigationBar
