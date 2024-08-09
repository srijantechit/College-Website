import React from 'react'

function Nss() {
    const data = [
        { id: 1, img: '../images/nss/img10.jpg', title: 'card title', description: 'card description' },
        { id: 2, img: '../images/nss/img9.jpg', title: 'card title', description: 'card description' },
        { id: 3, img: '../images/nss/img8.jpg', title: 'card title', description: 'card description' },
        { id: 4, img: '../images/nss/img4.jpg', title: 'card title', description: 'card description' },
        { id: 5, img: '../images/nss/img5.jpg', title: 'card title', description: 'card description' },
        { id: 6, img: '../images/nss/img6.jpg', title: 'card title', description: 'card description' },
        { id: 7, img: '../images/nss/img7.jpg', title: 'card title', description: 'card description' },
        { id: 8, img: '../images/nss/img1.jpg', title: 'card title', description: 'card description' },
        { id: 9, img: '../images/nss/img2.jpg', title: 'card title', description: 'card description' },
        { id: 10, img: '../images/nss/img3.jpg', title: 'card title', description: 'card description' },
        { id: 11, img: '../images/nss/img11.jpg', title: 'card title', description: 'card description' },
        { id: 12, img: '../images/nss/img12.jpg', title: 'card title', description: 'card description' },
        { id: 13, img: '../images/nss/img13.jpg', title: 'card title', description: 'card description' },
      ]
  return (
    <div>
      <div className='sub-headings'>NSS</div>
      <div className='sub-description'> The National Service Scheme (NSS), a government-sponsored public service program under the Ministry of Youth Affairs and Sports in India, aims to develop students' personalities through community service while promoting national integration and solidarity. In degree colleges, NSS units conduct a variety of activities, including organizing blood donation camps, health camps, and literacy drives to raise social awareness. They also engage in environmental initiatives such as tree plantation drives and cleanliness campaigns, fostering leadership qualities and democratic attitudes among students. Through these efforts, NSS seeks to create a sense of responsibility and community consciousness among young individuals.</div>
      <div className='nss-file'>
          NSS Special Camp 2024
          <a href={`${process.env.PUBLIC_URL}/downloads/nss  special camp 2024.pdf`} download>
            <button type='' className='nss-button'>Download</button>
          </a></div>
      <div className='sub-card-container'>
        {data.map((d, index) => (
          <div key={index} className='cards sub-cards'>
            <div className='sub-card-image'>
              <img src={process.env.PUBLIC_URL + d.img} alt='card-image' className='card-images' />
            </div>
            {/* <div className='sub-card-data'>
              <h3 className='sub-card-title'>{d.title}</h3>
              <p className='sub-card-desc'>{d.description}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Nss
