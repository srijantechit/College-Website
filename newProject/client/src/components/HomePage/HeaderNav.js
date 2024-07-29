import '../../App.css';
import { Link } from 'react-router-dom';

const HeaderNav=()=>{
    return(
        <div>
            <nav className='navbar'>
            <ul>
                <li><Link to="/" className='navigation-links'>Home</Link></li>
                <li><Link to="/facilities" className='navigation-links'>Facilities</Link></li>
                <li><Link to="/events" className='navigation-links'>Events</Link></li>
                <li><Link to="/activities" className='navigation-links'>Activities</Link></li>
                <li><Link to="/courses" className='navigation-links'>Courses</Link></li>
                <li><Link to="/alumini" className='navigation-links'>Alumini</Link> </li>
                <li><Link to="/blogs" className='navigation-links'>Blogs </Link></li> 
                <li><Link to="/gallery" className='navigation-links'>Gallery</Link> </li>
                <li><Link to="/event" className='navigation-links'>Event </Link></li>
            </ul>
            </nav>
        </div>
 
    )
}

export default HeaderNav;