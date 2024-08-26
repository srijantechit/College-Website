

import '../../App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const image1= 'images/image.jpg';
const image2= 'images/image3.png';
const image3= 'images/image2.jpg';
const image4= 'images/image4.jpg';
const image5= 'images/image5.jpg';
const image6= 'images/image6.jpg';
const image7= 'images/image7.jpg';
const ImageSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='mt-28 responsive-slider'>
    <style>
      {`
      .slick-prev, .slick-next{
      display: none !important}`
      }
      
    </style>
      <Slider {...settings} className="mb-52">

        <div className="carousel-item w-full 2xl:w-1/2">
            <img src={process.env.PUBLIC_URL + image1} className="w-full width" alt="Agriculture 1" />
        </div>
    
        <div className="carousel-item w-full 2xl:w-1/2">
            <img src={process.env.PUBLIC_URL + image2} className="w-full width" alt="Agriculture 1" />
        </div>
    
        <div className="carousel-item w-full 2xl:w-1/2">
            <img src={process.env.PUBLIC_URL + image3} className="w-full width" alt="Agriculture 1" />     
        </div>

        <div className="carousel-item w-full 2xl:w-1/2">         
            <img src={process.env.PUBLIC_URL + image4} className="w-full width" alt="Agriculture 1" />     
        </div>

        <div className="carousel-item w-full 2xl:w-1/2">        
            <img src={process.env.PUBLIC_URL + image5} className="w-full width" alt="Agriculture 1" />       
        </div>

        <div className="carousel-item w-full 2xl:w-1/2">        
            <img src={process.env.PUBLIC_URL + image6} className="w-full width" alt="Agriculture 1" />       
        </div>

        <div className="carousel-item w-full 2xl:w-1/2">        
            <img src={process.env.PUBLIC_URL + image7} className="w-full width" alt="Agriculture 1" />       
        </div>

      </Slider>
    </div>
  );
};

export default ImageSlider;
