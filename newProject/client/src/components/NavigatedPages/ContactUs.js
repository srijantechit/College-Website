
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactUs() {
  const location = 'images/location.png';
  const callUs = 'images/callUs.png';
  const emailUs = 'images/emailUs.png';
  const [contactForms, setContactForms] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 

    // useEffect(() => {
    //   // Fetch contact form data
    //   axios
    //     .get("http://localhost:5000/admin/contact-forms")
    //     .then((response) => {
    //       setContactForms(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching contact form data:", error);
    //     });
    // }, []);


    // Validate form data if needed
    const handleSubmit = async (e) => {
      e.preventDefault();  
      try {
        const response = await axios.post('http://localhost:5000/send-email', formData);
        console.log(response.data);
        alert('Message sent successfully!');
        // Optionally clear the form
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: ''
        });
      } catch (error) {
        console.error('There was an error sending the email!', error);
        alert('Failed to send message. Please try again later.');
      }
  };

  return (
    <div className='contactUs'>
      <div className='map-form-container'>
        <div className="map-container">
          <iframe 
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7666381.79373021!2d77.0925628!3d20.2442941!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd0dde53830cd85%3A0xca24dbff9c801d89!2sCollege%20Of%20Agriculture%20Amkheda%2CTal-Malegaon%2CDist-Washim%2063VV%2BP28%20Amkheda%2CTal-Dist-%20Malegaon%2C%20Maharashtra%20444503!3m2!1d20.244294099999998!2d77.0925628!5e0!3m2!1sen!2sin!4v1720592657121!5m2!1sen!2sin"
            width="500"  
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
          
        <div className='form-container'>
          <h2 className='form-heading'>Contact Us</h2> 
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />

            <label htmlFor="mobile">Mobile Number:</label>
            <input 
              type="tel" 
              id="mobile" 
              name="mobile" 
              value={formData.mobile} 
              pattern="[0-9]{10}" 
              onChange={handleChange} 
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>

            <button type="submit">SUBMIT</button>
          </form>             
        </div>
            
      </div>

      <div className='contact-information'>
        <div className='location'>
          <img src={process.env.PUBLIC_URL + location} className='location-img' alt='location'/>
          <div className='location-div'>
            College of Agriculture, Amkheda Tal-Malegaon.<br/> Dist-Washim, Maharashtra.
          </div>
        </div>
        <div className='location'>
          <img src={process.env.PUBLIC_URL + callUs} className='location-img' alt='location'/>
          <div className='location-div'>+91 9307979642 / 8805488695</div>
        </div>
        <div className='location'>
          <img src={process.env.PUBLIC_URL + emailUs} className='location-img' alt='location'/>
          <div className='location-div'>collegeofagriamkheda@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
