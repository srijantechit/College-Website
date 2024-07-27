import React from 'react';

function Laboratory() {
  const data = [
    { id: 1, img: '../images/laboratory/img1.jpg', title: 'card title', description: 'card description' },
    { id: 2, img: '../images/laboratory/img2.jpg', title: 'card title', description: 'card description' },
    { id: 3, img: '../images/laboratory/img3.jpg', title: 'card title', description: 'card description' },
    { id: 4, img: '../images/laboratory/img4.jpg', title: 'card title', description: 'card description' },
    { id: 5, img: '../images/laboratory/img5.jpg', title: 'card title', description: 'card description' },
    { id: 6, img: '../images/laboratory/img6.jpg', title: 'card title', description: 'card description' },
    { id: 7, img: '../images/laboratory/img7.jpg', title: 'card title', description: 'card description' },
    { id: 8, img: '../images/laboratory/img8.jpg', title: 'card title', description: 'card description' },
    { id: 9, img: '../images/laboratory/img9.jpg', title: 'card title', description: 'card description' },
    { id: 10, img: '../images/laboratory/img10.jpg', title: 'card title', description: 'card description' },
    { id: 11, img: '../images/laboratory/img11.jpg', title: 'card title', description: 'card description' }
  ];

  return (
    <div>
      <div className='sub-headings'>LABORATORY</div>
      <div className='sub-description'>Laboratories in an agricultural college provide essential hands-on experience, allowing students to apply theoretical knowledge to real-world scenarios. This practical work enhances their understanding of concepts and builds technical skills with industry-standard equipment. Students engage in research and problem-solving, often collaborating on projects, which prepares them for professional careers. Safety training and regulatory knowledge are also crucial, ensuring students handle materials and equipment responsibly. Overall, laboratories offer a comprehensive, interdisciplinary learning experience that bridges classroom theory with practical application.</div>
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

export default Laboratory;
