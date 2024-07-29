import '../../App.js';
import footerImage from '../../images/Footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import brands icons for Facebook, Twitter, LinkedIn
import { faMapMarkerAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
function ContactUs() {
  return (
    <div className='display-col'>
      <img src={footerImage} alt='NoImage' className='footer-image'/>
      
      <div className='contact-main-container'>
        <div className='contact-container1'>
          <h3 className='headings'>Other Links</h3>
          <ul className='lists'>
          <li><a href='https://www.mcaer.org/' className='other-links'>Maharashtra Council of Agriculture Education and Research(MCACER), Pune</a></li>
          <li><a href='https://www.icar.org.in/' className='other-links'>Indian Council of Agricultural Research(ICAR)</a></li>
          <li><a href='https://www.pdkv.ac.in/' className='other-links'>Dr. Panjabrao Deshmukh Krishi Vidyapeeth (PDKV)</a></li>
          <li><a href='http://mpkv.ac.in/' className='other-links'>Mahatma Phule Krishi Vidyapeeth (MPKV)</a></li>
          <li><a href='https://www.dbskkv.org/' className='other-links'>Dr. Balasaheb Sawant Konkan Krishi Vidyapeeth (BSKKV)</a></li>
          <li><a href='https://www.vnmkv.ac.in/' className='other-links'>Vasantrao Naik Marathwada Agricultural University (VNMKV)</a></li>
          </ul>
        </div>

        <div className='contact-container'>
          <h3 className='headings'>Stay Connected</h3>
          <ul className='lists'>
              <li><FontAwesomeIcon icon={faFacebook} /><span className='quote'>Like Us on facebook</span></li>
              <li><FontAwesomeIcon icon={faTwitter} /><span className='quote'>Follow Us on Twitter</span></li>
              <li><FontAwesomeIcon icon={faLinkedin} /><span className='quote'>Connect Us on LinkedIn</span></li>
          </ul>      
        </div>

        <div className='contact-container'>
          <h3 className='headings'>Contact Information</h3>
          <ul className='lists'>
              <li> <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className="quote">Shardanagar Agri Educational Campus Shardanagar, Baramati(MS) India</span></li>
              <li><FontAwesomeIcon icon={faPhone} />
                  <span className="quote">+912112-255518</span></li>
              <li><FontAwesomeIcon icon={faEnvelope} />
                  <span className="quote">agricolbmt@rediffmail.com</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
