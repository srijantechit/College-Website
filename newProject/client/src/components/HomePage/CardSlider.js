import '../../App.css'; 
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from '../../CustomArrows';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
    { img:'../images/cardimage.jpg',
     title:'this is title',
     review:' this is the review for the above image'
    },
    { img:'../images/cardimage.jpg',
      title:'this is title',
      review:' this is the review for the above image'
    },
    { img:'../images/cardimage.jpg',
      title:'this is title',
      review:' this is the review for the above image'
    },
    { img:'../images/cardimage.jpg',
      title:'this is title',
      review:' this is the review for the above image'
    },
    { img:'../images/cardimage.jpg',
      title:'this is title',
      review:'this is the review for the above image'
    },
    { img:'../images/cardimage.jpg',
      title:'this is title',
      review:' this is the review for the above image'
    },
       
    
]
function CardSlider(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, 
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
    return(
        <div className='card-slider'>
          <Slider {...settings}> 
           {data.map((d, index) => (
          <div key={index} className='cards card'>
            <div className='card-image-background '>
                <img src={process.env.PUBLIC_URL + d.img} alt='card-image ' className=' card-images '/>
            </div>
            <div className='card-content-background'>
                <h3>{d.title}</h3>
                <p>{d.review}</p>
                <button>Read more</button>
            </div>
          </div>
        ))}
        </Slider>
        </div>
    )
}

export default CardSlider;