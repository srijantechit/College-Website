import '../../App.css';
// import image from 'images/Agriculture-Image.jpg'

const AboutUs=()=>{
    const image ='images/Agriculture-Image.jpg'
    return(
        <div className='about-us margin-top-0'>
            
            <div className='margin-top-0'>
            <p className='paragraph first-letter-larger'> We will develop as an institution with a commitment to excellence in (EHSAS) Education, Health, Social, Agriculture and Spiritual. We will nurture and promote human advancement.</p>
                
                <div className='about-us-heading'>
                    <div className='about-us-text'>About Us</div> 
                    <img className='about-us-image' src={image} alt='about-us-image'/>
                </div>
            
                <div className='list'>
                    <p className='first-letter'>Education - Education is the most powerful weapon which you can use to change the world.</p>
                    <p className='first-letter'>Health - The greatest wealth is health.</p>
                    <p className='first-letter'>Social -The best way to find yourself is to lose yourself in the service of others.</p>
                    <p className='first-letter'>Agriculture - A fertile soil alone does not carry agriculture to perfection</p>
                    <p className='first-letter'>Spiritual - Spirituality is finding meaning beyond the material.</p>
                </div>
                
                <p className='description'>Mission is to promote quality education, training and research for the betterment and sustainable development of the students and farmers. To develop practical oriented agricultural graduates using modern agricultural technology. To sustain the survival of Indian farming by using modern technology. Effective transfer of agricultural technology from lab to land. To diversify extension services for better development of rural community.</p>
            </div>
         </div>
    )
}

export default AboutUs;