import '../../App.css';
import image from '../../images/AboutUs.jpg'

const AboutUs=()=>{
    return(
        <div className='about-us'>
            
            <div className=''>
                <div className='about-us-heading'>
                    <h2 className='about-us-text'>About Us</h2> 
                    <img className='about-us-image' src={image} alt='about-us-image'/>
                </div>
            
                <p className='paragraph first-letter-larger'> We will develop as an institution with a commitment to excellence in (EHSAS) Education, Health, Social, Agriculture and Spiritual. We will nurture and promote human advancement.</p>
                <p className='description'>Mission is to promote quality education, training and research for the betterment and sustainable development of the students and farmers. To develop practical oriented agricultural graduates using modern agricultural technology. To sustain the survival of Indian farming by using modern technology. Effective transfer of agricultural technology from lab to land. To diversify extension services for better development of rural community.</p>
            </div>
         </div>
    )
}

export default AboutUs;