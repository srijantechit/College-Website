import '../../App.css'
import Testimonials from '../../components/HomePage/Testimonials'
import AboutUs from './AboutUs'
import { FaLink } from 'react-icons/fa';
import ImageSlider from './ImageSlider';
const ImageBackground=()=>{
   
    const background='images/image2.jpg'
    const agriClg ='images/agri-clg.jpg'
    const agriPoli ='images/agri-poli.jpg'
    return(
        <div className='img-container'>
            <div>
                <ImageSlider/>
                
                {/* <img className='Background-image' src={process.env.PUBLIC_URL + background} alt='background-image'/> */}
            </div> 
            <div>
                <AboutUs/>
                
                <div className='home-cards'>
                <div className="card single-card card-side  bg-base-100 shadow-xl">
                    <figure>
                        <img className='card-image'
                        src={process.env.PUBLIC_URL + agriClg }
                        alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">College Of Agriculture</h2>
                        <p className='card-p'>College of Agriculture offers a stimulating and unique learning environment to study, that develops and encourages our students.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card single-card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img className='card-image'
                        src={process.env.PUBLIC_URL+ agriPoli}
                        alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Agriculture Technical School</h2>
                        <p className='card-p'>In this hi-tech era, agriculture enterprise is much more than merely crop production or live-stock farming or allied activities.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='collaboration'>
                    <button className='collaboration-button'>
                        <a href="https://www.agricollegebaramati.in/index.aspx" target="_blank" rel="noopener noreferrer" className='collaboration-link'>
                            <FaLink className='link-icon' /> C O L L A B O R A T I O N
                        </a>
                    </button>
            </div>
            <div class="quote-section">
                <p class="quote-text">
                    "At our college, innovation meets tradition in the fields of agriculture. We are dedicated to empowering students to grow a greener tomorrow through cutting-edge education and hands-on experience."
                </p>
            </div>
            
            <div><Testimonials/></div>
        </div>
    )
}

export default ImageBackground;


// import '../../App.css';
// import logo from '../../images/logo.jpg';
// import agriClg from '../../images/agri-clg.jpeg';
// import agriPoli from '../../images/agri-poli.jpeg';
// import Testimonials from '../../components/HomePage/Testimonials';
// import AboutUs from './AboutUs';
// import { FaLink } from 'react-icons/fa';
// import ImageSlider from './ImageSlider';

// const ImageBackground = () => {
//     return (
//         <div className='img-container'>
//             <div>
//                 <ImageSlider />
//                 <div className='text-overlay'>
//                     <img className='header-logo col-2' src={logo} alt='logo' />
//                     <div className='header-content col-7'>
//                         <div className='sub-content1'>Geetai Humankind Development Trust’s</div>
//                         <div className='sub-content2'>College of Agriculture, Amkheda Tal-Malegaon Dist-Washim , 11296
//                          ( Affiliated to Dr. Panjabrao Deshmukh Krishi Vidyapeeth, Akola. )</div>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <AboutUs />
                
//                 <div className='home-cards'>
//                     <div className="card single-card card-side bg-base-100 shadow-xl">
//                         <figure>
//                             <img className='card-image' src={agriClg} alt="College of Agriculture" />
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">College Of Agriculture</h2>
//                             <p className='card-p'>College of Agriculture offers a stimulating and unique learning environment to study, that develops and encourages our students.</p>
//                         </div>
//                     </div>
//                     <div className="card single-card card-side bg-base-100 shadow-xl">
//                         <figure>
//                             <img className='card-image' src={agriPoli} alt="Agriculture Polytechnic" />
//                         </figure>
//                         <div className="card-body">
//                             <h2 className="card-title">Agriculture Polytechnic</h2>
//                             <p className='card-p'>In this hi-tech era, agriculture enterprise is much more than merely crop production or live-stock farming or allied activities.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='collaboration'>
//                 <button className='collaboration-button'>
//                     <a href="https://www.agricollegebaramati.in/index.aspx" target="_blank" rel="noopener noreferrer" className='collaboration-link'>
//                         <FaLink className='link-icon' /> C O L L A B O R A T I O N
//                     </a>
//                 </button>
//             </div>
//             <div className="quote-section">
//                 <p className="quote-text">
//                     "At our college, innovation meets tradition in the fields of agriculture. We are dedicated to empowering students to grow a greener tomorrow through cutting-edge education and hands-on experience."
//                 </p>
//             </div>
//             <div><Testimonials /></div>
//         </div>
//     );
// }

// export default ImageBackground;
