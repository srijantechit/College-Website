import '../../App.css';
import cardimage from '../../images/cardimage.jpg'
const Card=()=>{
    return(
        <div className='all-cards'>
            <div className='card'>
                <img className='card-image' src={cardimage} alt='cardimage'/>
                <div className='card-content'>
                    <h3>Card Heading</h3>
                    <p>this is the card description where the information about card is displayed</p>
                </div>
            </div>
            <div className='card'>
                <img className='card-image' src={cardimage} alt='cardimage'/>
                <div className='card-content'>
                    <h3>Card Heading</h3>
                    <p>this is the card description where the information about card is displayed</p>
                </div>
            </div>
            <div className='card'>
                <img className='card-image' src={cardimage} alt='cardimage'/>
                <div className='card-content'>
                    <h3>Card Heading</h3>
                    <p>this is the card description where the information about card is displayed</p>
                </div>
            </div>
            <div className='card'>
                <img className='card-image' src={cardimage} alt='cardimage'/>
                <div className='card-content'>
                    <h3>Card Heading</h3>
                    <p>this is the card description where the information about card is displayed</p>
                </div>
            </div>
        </div>
    )
}

export default Card