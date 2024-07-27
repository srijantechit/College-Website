import '../../App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import brands icons for Facebook, Twitter, LinkedIn
import { faMapMarkerAlt, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
function FooterContactUs() {
  return (
    <div className='display-col'>
      {/* <img src={footerImage} alt='NoImage' className='footer-image'/> */}
      
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
          <li><a href='https://cetcell.mahacet.org/' className='other-links'>CET Cell</a></li>
          <li><a href='https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A1DB822FC15D61FEA' className='other-links'>Maha DBT</a></li>
          </ul>
        </div>

        <div className='contact-container'>
          <h3 className='headings'>Stay Connected</h3>
          <ul className='lists'>
              <li><FontAwesomeIcon icon={faFacebook} /><span className='quote quote-content'>Like Us</span></li>
              <li><FontAwesomeIcon icon={faTwitter} /><span className='quote quote-content'>Follow Us</span></li>
              <li><FontAwesomeIcon icon={faLinkedin} /><span className='quote quote-content'>Connect Us</span></li>
          </ul>      
        </div>

        <div className='contact-container width-350'>
          <h3 className='headings'>Contact Information</h3>
          <table className='lists'>
            <tr>
              <td><FontAwesomeIcon icon={faMapMarkerAlt} /></td>
              <td><span className="quote-content">Shardanagar Agri Educational Campus Shardanagar, Baramati(MS) India</span></td>
            </tr>
            <tr>
              <td><FontAwesomeIcon icon={faPhone} /></td>
              <td><span className="quote-content"> +91 9307979642 / 8805488695</span></td>
            </tr>
            <tr>
              <td><FontAwesomeIcon icon={faEnvelope} /></td>
              <td><span className="quote-content">collegeofagriamkheda@gmail.com</span></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FooterContactUs;
