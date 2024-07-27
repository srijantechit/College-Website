import React from 'react';

function Library() {
  const data = [
    { id: 1, img: '../images/library/img1.jpeg', title: 'card title', description: 'card description' },
    { id: 2, img: '../images/library/img2.jpeg', title: 'card title', description: 'card description' },
    { id: 3, img: '../images/library/img3.jpeg', title: 'card title', description: 'card description' },
    { id: 4, img: '../images/library/img4.jpeg', title: 'card title', description: 'card description' },
    { id: 5, img: '../images/library/img5.jpeg', title: 'card title', description: 'card description' },
    { id: 6, img: '../images/library/img6.jpg', title: 'card title', description: 'card description' },
    
  ];

  return (
    <div>
      <div className='sub-headings'>LIBRARY</div>
      <div className='sub-description'> Our agricultural college boasts a state-of-the-art library facility, providing an extensive collection of books, journals, and digital resources tailored to support your academic and research needs. The serene and well-equipped reading room offers the perfect environment for focused study and intellectual exploration. Whether you're preparing for exams, conducting research, or simply seeking a quiet place to read, our library and reading room are designed to cater to all your scholarly pursuits. With comfortable seating, ample lighting, and a welcoming atmosphere, you'll find everything you need to enhance your learning experience and achieve academic excellence.</div>
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

export default Library;
