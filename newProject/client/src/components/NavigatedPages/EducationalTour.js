import React from 'react';

function EducationalTour() {
  const data = [
    { id: 1, img: '../images/tour/img1.jpeg', title: 'card title', description: 'card description' },
    { id: 2, img: '../images/tour/img2.jpeg', title: 'card title', description: 'card description' },
    { id: 3, img: '../images/tour/img3.jpeg', title: 'card title', description: 'card description' },
    { id: 4, img: '../images/tour/img4.jpeg', title: 'card title', description: 'card description' },
    { id: 5, img: '../images/tour/img5.jpeg', title: 'card title', description: 'card description' },
    { id: 6, img: '../images/tour/img6.jpeg', title: 'card title', description: 'card description' },
    { id: 7, img: '../images/tour/img7.jpeg', title: 'card title', description: 'card description' },
    { id: 8, img: '../images/tour/img8.jpeg', title: 'card title', description: 'card description' },
    { id: 9, img: '../images/tour/img9.jpeg', title: 'card title', description: 'card description' },
    { id: 10, img: '../images/tour/img10.jpeg', title: 'card title', description: 'card description' },
    { id: 11, img: '../images/tour/img11.jpeg', title: 'card title', description: 'card description' }
  ];

  return (
    <div>
      <div className='sub-headings'>EDUCATIONAL TOUR</div>
      <div className='sub-description'> We often organizes educational tours focusing on advanced agricultural practices, research centers, and model farms. Students get hands-on experience with modern agricultural techniques and tools, which helps them understand the practical challenges and solutions in the field. These tours often include visits to research stations and experimental farms​. Here are some image gallery about previous educational tour.​ </div>
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

export default EducationalTour;
