import React from 'react';

function Sports() {
  const data = [
    { id: 1, img: '../images/sports/img1.jpeg', title: 'card title', description: 'card description' },
    { id: 2, img: '../images/sports/img2.jpeg', title: 'card title', description: 'card description' },
    { id: 3, img: '../images/sports/img3.jpeg', title: 'card title', description: 'card description' },
    { id: 4, img: '../images/sports/img4.jpeg', title: 'card title', description: 'card description' },
    { id: 5, img: '../images/sports/img5.jpeg', title: 'card title', description: 'card description' },
    { id: 6, img: '../images/sports/img6.jpeg', title: 'card title', description: 'card description' },
    { id: 7, img: '../images/sports/img7.jpg', title: 'card title', description: 'card description' },
  ]

  return (
    <div>
      <div className='sub-headings'>SPORTS</div>
      <div className='sub-description'> At our agricultural college, we believe that physical fitness and well-being are crucial to the holistic development of our students. Our sports program offers a wide range of activities to cater to diverse interests and skill levels. In addition to enhancing physical health, our sports program aims to instill values of perseverance, leadership, and camaraderie among students. Join us and experience a vibrant campus life where sports play an integral role in nurturing well-rounded individuals.</div>
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

export default Sports;
