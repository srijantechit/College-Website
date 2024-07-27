import React from 'react'
function ContactUs() {
  const location = 'images/location.png'
  const callUs ='images/callUs.png'
  const emailUs ='images/emailUs.png'


  function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var message = document.getElementById('message').value.trim();
    
    // Simple validation
    if (name === '' || email === '' || mobile === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }
    
    // Validate email format (optional)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // You can add more specific validations for mobile number if needed
    
    // If all validations pass, you can proceed to submit the form
    // For this example, let's just send an email to nehals@myospaz.in
    var formData = {
        name: name,
        email: email,
        mobile: mobile,
        message: message
    };

    // Send the form data via email (This part requires server-side scripting)
    // For demonstration purposes, we'll simulate sending to nehals@myospaz.in
    var emailContent = 'New Contact Form Submission:\n\n' +
                       'Name: ' + formData.name + '\n' +
                       'Email: ' + formData.email + '\n' +
                       'Mobile Number: ' + formData.mobile + '\n' +
                       'Message:\n' + formData.message;

    // Replace with actual email sending code (server-side)
    // For demonstration, we'll just log the email content
    console.log(emailContent);

    // Optionally, you can clear the form after submission
    document.getElementById('contactForm').reset();

    // Prevent the form from actually submitting and refreshing the page
    return false;
}
  return (
    <div className='contactUs'>
        <div className='map-form-container'>
            <div className='form-container'>
            <h2 className='form-heading'>Contact Us</h2>
            <form id="contactForm" onsubmit="return validateForm()">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label for="mobile">Mobile Number:</label>
                <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" required/>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit" value="Submit" onClick={validateForm}>SUBMIT</button>
            </form>             
            </div>
            <div className="map-container">
                <iframe 
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7666381.79373021!2d77.0925628!3d20.2442941!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd0dde53830cd85%3A0xca24dbff9c801d89!2sCollege%20Of%20Agriculture%20Amkheda%2CTal-Malegaon%2CDist-Washim%2063VV%2BP28%20Amkheda%2CTal-Dist-%20Malegaon%2C%20Maharashtra%20444503!3m2!1d20.244294099999998!2d77.0925628!5e0!3m2!1sen!2sin!4v1720592657121!5m2!1sen!2sin"
                  width="500" 
                  height="400" 
                  style={{ border: 0 }}
                  allowfullscreen="" 
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

        <div className='contact-information'>
          <div className='location'>
              <img src={process.env.PUBLIC_URL+ location} className='location-img' alt='location'/>
              <div className='location-div'>College of Agriculture, Amkheda Tal-Malegaon.<br/> Dist-Washim, Maharashtra.</div>
          </div>
          <div className='location'>
            <img src={process.env.PUBLIC_URL+ callUs} className='location-img' alt='location'/>
              <div className='location-div'>+91 8805488695 / 8380040081</div>
          </div>
          <div className='location'>
              <img src={process.env.PUBLIC_URL + emailUs} className='location-img' alt='location'/>
              <div className='location-div' >collegeofagriamkheda@gmail.com</div>
          </div>
        </div>
    </div>
  )
}

export default ContactUs;
