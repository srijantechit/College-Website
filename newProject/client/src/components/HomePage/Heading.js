import '../../App.css';
import logo from '../../images/logo.jpg'


const Heading =()=>{
    return(
        <div className="header">
            <img className='header-logo col-2' src={logo} alt='logo'/>
            <div className='header-content col-7'>
                <div className='sub-content1'>Geetai Humankind Development Trust’s</div>
                <div className='sub-content2'>College of Agriculture, Amkheda Tal-Malegaon Dist-Washim , 11296
                ( Affiliated to Dr. Panjabrao Deshmukh Krishi Vidyapeeth, Akola. )</div>
            </div>
            
            
        </div>
    )            

}
export default Heading;