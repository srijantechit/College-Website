import '../../App.css';


const Heading =()=>{
    const logo ='images/logo.jpg'
    const pdkvLogo ='images/pdkv-removebg.png'
    const geetai = 'images/geetai.png'
    return(
           <div className='text-overlay'>
                <img className='header-logo' src={process.env.PUBLIC_URL + logo} alt='logo'/>
                <div className='header-content col-7'>
                      <div className='sub-content-container'>
                        <img src={process.env.PUBLIC_URL + geetai} />
                        <div className='sub-content1'>Geetai Humankind Development Trust’s</div>
                       </div>
                      <div className='sub-content2'>Karmayogi Babaraoji Jogdand College of Agricultre                         
                      </div>
                      <div className='sub-content3'>(Ahinsatirth)Amkheda Tq. Malegaon Dist. Washim </div>
                      <div className='sub-content3 affiliation'>Affiliated to Dr. Panjabrao Deshmukh Krishi Vidyapeeth, Akola. </div>
                      
                </div>
                <img className='header-logo' src={process.env.PUBLIC_URL + pdkvLogo} alt='logo'/>
            </div>
            
    )            

}
export default Heading;