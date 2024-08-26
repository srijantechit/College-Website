import React from 'react'
// import aboutUs from '../../images/about-us-page.jpg'
// import proff from '../../images/professor-img.jpg'
function AboutCollege() {

    const aboutUs ='images/about-us-page.jpg'
    const proff ='images/professor-img.jpg'
    const president='images/ceo_image1.jpeg'


  return (
    <div className='about-college'>
      
      {/* <img src={process.env.PUBLIC_URL + aboutUs} alt='aboutUs' className='about-us-page-img'/> */}
      {/* <div className='heading-about-us'>
        <div className=' bg-color'>ABOUT US</div>
      </div> */}
      {/* About college */}
      <div className='clg-info'>
            <div className='history-container'>
                <div className='president-card'>
                    <div className='proff-img display-flex'>
                    <img src={process.env.PUBLIC_URL + president} alt='president image'/></div>
                    <div className='proff-info'>
                    <div className='proff-name'>Mr. Avinash Manikraoji Jogdand</div>
                        <div className='proff-edu'>CEO, College of Agriculture, Amkheda.</div>
                        <div className='proff-desc'> The college of Agriculture,Amkheda, Malegaon forays into education extend back to over four years and today stand as benchmarks for other who aspire to evaluate and render services to farmers through Education, Research and Extension activities. The college has over a total 100 acres of land under its possession for conducting research, field trials in addition to commercial production of vegetables. Our campus is a landmark in itself having a culture of commitment, transparency and teamwork. The faculty is committed to provide academic excellence and maintaining interdisciplinary approaches in its agricultural science programmes and also committed to provide students with abundant and diverse opportunities to explore and express themselves not only in education but also in sports, arts, culture and spiritualism. We are working on the platform of EHSAS (Education, Health, Social, Agriculture and Spiritual). The college has successfully shaping the
                        students as quality human resource by imparting necessary skills and confidence among the agricultural graduates to start and operate their own business units through firsthand experience of running model farms and pilot-plant during the course of study. The focus approaches of the College are to increase the profitability of the farmer by efficient use of information technology and develop an agriculture based industry model with lowering input and proper marketing cost to make agriculture economically viable.</div>
                    </div>
                </div>
                <div className='history-clg'>
                    <div className='desc'>The college is approved by MCAER (Maharashtra Council of Agriculture Education & Research, Pune) & Affiliated to Dr. Panjabrao Deshmukh Krishi Vidyapeeth, Akola. Karmyogi Babaravaji Jogdand College of Agriculture is established in 31 July, 2015 with the minimum capacity of 60 students. The college is doing better progress under the excellent guidance and dedication of <strong> Dr. Manikrao Babaraoji Jogdand</strong>, President and other respected management committee members.</div>
                    <div className='desc'>The Karmyogi Babaravaji Jogdand College of Agriculture, Amkheda  located at village Amkheda only 12km away from taluka place and 16 km from washim district. Geetai human kind development Trust was built in 2001 and is working for betterment of the village people. Trust having various sustainable funded activities, social funded avtivities, and Geetai events in its surroundings. </div>
                    <div className='desc'>Trust also has more than 40.41 ha. own land. On this land, various agronomical as well as horticultural crops have been cultivated. This land is facilitated with different modern agricultural techniques like advanced irrigation techniques (sprinkler, drip irrigation, fertigation), well equipped farm machineries (tractors, rotavator, cultivator, harvester and others). </div>
                    <div className='desc'>Trust runs two colleges in their Premises such as Karmyogi babaravaji Jogdand College of Agriculture and Agriculture Technical School. Karmyogi babaravaji jogdand college of Agriculture is well connected by rail and road. The college is located 10 km from Jaulka (Rly.), 16 km from Washim and 12 km from Malegaon. Buses/auto services are frequently available from these places to reach college.</div>
                </div>
                
            </div>
            <div class="management-container">
                <h1>Local Advisory Committee</h1>
                <table class="management-table">
                    <thead>
                        <tr>
                            <th>Members</th>
                            <th>Post</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dr. Manikrao Babaraoji Jogdand</td>
                            <td>President</td>
                        </tr>
                        <tr>
                            <td>Dr. Parashram Rambhauji Jogdand</td>
                            <td>Vice President</td>
                        </tr>
                        <tr>
                            <td>Mr. Jagdevraoji Kisanraoji Akhade</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Prakashraoji Sheshraoji Bhakre</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Himmat Manikraoji Jogdand</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Rajesh Nimbaji Tale</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Sanjayrao Daulatrao Gore</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Pandurangrao Kundlikji Jogdand</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Bhagvanrao Kundalikji Jogdand</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr.Gajajnanrao Haribhau Jogdand</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Sureshrao Rambhauji Jogdand</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr.Gajananrao Rambhaunji Pacharane</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <td>Mr. Bhagawat Mahadevraoji Jogdand</td>
                            <td>Member</td>
                        </tr>
                    </tbody>
                </table>
            </div>
      </div>
      {/* professors card */}
      <div className='subHeading'>
         <h2 className='subheading-content our-professors'>Our Professors</h2>
      </div>
                        {/* professors table */}
                        {/* <div className='subHeading'>
                            <h2>Faculty Members</h2>
                        </div> */}
      <div className='proffs-container'>
            <div className='proff-card'>
                <div className='proff-img'><img src={process.env.PUBLIC_URL + proff} alt='professor image'/></div>
                <div className='proff-info'>
                    <div className='proff-name'>Dr. R. M. Kshirsagar</div>
                    <div className='proff-edu'>M.Sc. Ph.D. (Agril Botany)</div>
                    <div className='proff-desc'> Effective transfer of agricultural technology from lab to land and diversity extension service for better dvelopmanet of rural community and farmers to develope practical oriented agricultural graduates using modern agriculture technology to promote quality eductaion, training ad research for the betterment and sustainable development of the students and farners to sustain the survival of Indian farming by using modern technology nature and promote human advancement. </div>
                </div>
            </div>
        </div>
            <div class="table-container">
             <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Qualification</th>
                        <th>Department</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dr. R.M. Kshirsagar</td>
                        <td>MSc PhD</td>
                        <td>Agril Botany</td>
                        <td>Principal</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mr. A.D. Manvatkar</td>
                        <td>MSc (Agri)</td>
                        <td>Agronomy</td>
                        <td>Vice Principal</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mr. P.T. Nichal</td>
                        <td>MSc (Agri)</td>
                        <td>Plant Pathology</td>
                        <td>Assistant Professor/ Education Incharge</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mr. S.T. Jadhav</td>
                        <td>MSc (Agri)</td>
                        <td>SSAC</td>
                        <td>Assistant Professor</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Mr. S.M. Gaikwad</td>
                        <td>MSc (Agri)</td>
                        <td>Agril Botany</td>
                        <td>Assistant Professor</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Mr. S.B. Wakudkar</td>
                        <td>MSc (Agri)</td>
                        <td>Agronomy</td>
                        <td>Assistant Professor</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Miss. S.N. Atalkar</td>
                        <td>MSc (Agri)</td>
                        <td>Agril Economics</td>
                        <td>Assistant Professor</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Miss. K.N. Lokhande</td>
                        <td>MSc (Agri)</td>
                        <td>Agril Engineering</td>
                        <td>Assistant Professor</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Miss. S.N. Waghmare</td>
                        <td>MSc (Agri)</td>
                        <td>Agril Entomology</td>
                        <td>Assistant Professor</td>
                    </tr>
                </tbody>
             </table>
            </div>


    </div>
  )
}

export default AboutCollege
