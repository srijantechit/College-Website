import '../../App.css'
import image1 from '../../images/image1.jpg'
import AboutUs from './AboutUs'
const ImageBackground=()=>{
    return(
        <div className='img-container'>
            <div>
                <img className='Background-image' src={image1} alt='background-image'/>
                <div className='text-overlay'>
                    <h2>Text Over Image</h2>
                    <p>some general information about college </p>
                </div>
            </div> 
            <div>
                <AboutUs/>
            </div>
        </div>
    )
}

export default ImageBackground;

// import Slider from "react-slick";
// import { CustomNextArrow, CustomPrevArrow } from '../CustomArrows';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const data = [
//     { img:'./images/cardimage.jpg',
//      title:'this is title',
//      review:' this is the review for the above image'
//     },
//     { img:'./images/cardimage.jpg',
//       title:'this is title',
//       review:' this is the review for the above image'
//     },
//     { img:'./images/cardimage.jpg',
//       title:'this is title',
//       review:' this is the review for the above image'
//     },
//     { img:'./images/cardimage.jpg',
//       title:'this is title',
//       review:' this is the review for the above image'
//     },
//     { img:'./images/cardimage.jpg',
//       title:'this is title',
//       review:'this is the review for the above image'
//     },
//     { img:'./images/cardimage.jpg',
//       title:'this is title',
//       review:' this is the review for the above image'
//     },
       
    
// ]
// function ImageBackground(){
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//   };
//     return(
//         <div className='card-slider'>
//           <Slider {...settings}> 
//            {data.map((d, index) => (
//           <div key={index} className='cards card'>
//             <div className='card-image-background '>
//                 <img src={process.env.PUBLIC_URL + d.img} alt='card-image ' className=' card-images '/>
//             </div>
//             <div className='card-content-background'>
//                 <h3>{d.title}</h3>
//                 <p>{d.review}</p>
//                 <button>Read more</button>
//             </div>
//           </div>
//         ))}
//         </Slider>
//         </div>
//     )
// }

// export default ImageBackground;