import React from 'react';

function Hostel() {
  const data = [
    { id: 1, img: '../images/hostel/img2.jpeg', title: 'card title', description: 'card description' },
    { id: 2, img: '../images/hostel/img5.jpeg', title: 'card title', description: 'card description' },
    { id: 3, img: '../images/hostel/img3.jpeg', title: 'card title', description: 'card description' },
    { id: 4, img: '../images/hostel/img4.jpeg', title: 'card title', description: 'card description' },
    { id: 6, img: '../images/hostel/img6.jpeg', title: 'card title', description: 'card description' },
   
    ];

  return (
    <div>
      <div className='sub-headings'>HOSTEL</div>
      <div className='sub-description'> We provide comfortable and secure hostel facilities for students. Our hostels are designed to offer a home-away-from-home experience, ensuring a safe, supportive, and inclusive living environment. Each hostel is equipped with modern amenities, including Wi-Fi, spacious rooms, and common areas for socializing and relaxation. We prioritize the well-being of our students, with round-the-clock security and dedicated staff to address any needs or concerns. Living on campus not only fosters a sense of community but also enhances the overall college experience, allowing students to fully immerse themselves in academic and extracurricular activities.</div>
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
  );
}

export default Hostel;
