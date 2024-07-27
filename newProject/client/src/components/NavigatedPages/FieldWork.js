import React from 'react';

function FieldWork() {
  const data = [
    { id: 1, img: '../images/activities/img1.jpeg' },
    { id: 2, img: '../images/activities/img2.jpeg' },
    { id: 3, img: '../images/activities/img3.jpeg' },
    { id: 4, img: '../images/activities/img4.jpeg' },
    { id: 5, img: '../images/activities/img5.jpeg' },
    { id: 6, img: '../images/activities/img6.jpeg' },
    { id: 7, img: '../images/activities/img7.jpeg' },
    { id: 8, img: '../images/activities/img8.jpeg' },
  ];

  return (
    <div className="field-work-container">
      <div className="field-work-images">
        {data.map((d, index) => (
          <div key={index} className="field-work-image sub-card-image">
            <img src={process.env.PUBLIC_URL + d.img} alt="field-work" />
          </div>
        ))}
      </div>
      <div className="field-work-description">
        <h2>Field Work in Our College</h2>
        <p>
          Fieldwork is a cornerstone of the educational experience at our agricultural college, designed to provide students with practical, hands-on experience in various aspects of agriculture. This vital component of the curriculum ensures that students are well-prepared to meet the challenges of modern farming and agribusiness.
        </p>
        <h3>Key Features of Field Work :-</h3>
        <p><strong className='block'>Practical Training:</strong> Students participate in diverse agricultural activities, including crop cultivation, soil analysis, pest management, and irrigation practices. This hands-on training is essential for understanding the practical applications of theoretical knowledge gained in the classroom.</p>
        <p><strong className='block'>Research and Innovation:</strong> Fieldwork often involves participation in ongoing research projects. Students work alongside faculty on experiments and trials, learning about new techniques and innovations in agriculture. This exposure helps them stay abreast of the latest advancements in the field.</p>
        <p><strong className='block'>Visits to Model Farms and Research Stations:</strong> Regular visits to model farms, agricultural research stations, and experimental plots are organized. These visits provide insights into large-scale farming operations and the implementation of advanced agricultural practices.</p>
        <p><strong className='block'>Interdisciplinary Learning:</strong> Fieldwork is interdisciplinary, integrating knowledge from plant sciences, soil sciences, agricultural engineering, and environmental studies. This holistic approach helps students understand the interconnectedness of different agricultural disciplines.</p>
        <p><strong className='block'>Community Engagement:</strong> Students often engage with local farming communities, providing assistance and learning from experienced farmers. This interaction helps them appreciate the socio-economic aspects of agriculture and develop solutions tailored to local needs.</p>
        <p><strong className='block'>Skill Development:</strong> Through fieldwork, students develop essential skills such as critical thinking, problem-solving, teamwork, and leadership. These skills are crucial for their future careers in agriculture and related fields.</p>
        <p><strong className='block'>Sustainability Practices:</strong> Emphasis is placed on sustainable farming practices. Students learn about organic farming, resource conservation, and environmentally friendly agricultural techniques, preparing them to contribute to sustainable development in agriculture.</p>
        <h3>Benefits of Field Work :-</h3>
        <p><strong className='block'>Enhanced Learning:</strong> Practical experience reinforces theoretical knowledge, making learning more effective and comprehensive.</p>
        <p><strong className='block'>Career Preparation:</strong> Fieldwork prepares students for various careers in agriculture, agribusiness, research, and extension services.</p>
        <p><strong className='block'>Networking:</strong> Interaction with professionals, researchers, and farmers provides valuable networking opportunities.</p>
        <p><strong className='block'>Real-World Problem Solving:</strong> Students learn to tackle real-world agricultural problems, preparing them to become innovative and effective agricultural professionals.</p>
        <p>By incorporating extensive fieldwork into our curriculum, we aim to produce graduates who are not only knowledgeable but also skilled and ready to make significant contributions to the agricultural sector.</p>
      </div>
    </div>
  );
}

export default FieldWork;
