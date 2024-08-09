import '../../App.css';
import { useState, useEffect } from 'react';
// import eduImg1 from '../../images/tour/img1.jpeg'; // Add the correct image paths
// import labImg1 from '../../images/laboratory/img1.jpg';
// import hostelImg1 from '../../images/hostel/img1.jpeg';
// import wifiImg1 from '../../images/wifi/wifi.jpg';
// import sportsImg1 from '../../images/sports/img1.jpeg';
import FieldWork from './FieldWork.js'
import EducationalTour from '../NavigatedPages/EducationalTour.js'
import Hostel from '../NavigatedPages/Hostel.js'
import Laboratory from '../NavigatedPages/Laboratory.js'
import Library from '../NavigatedPages/Library.js'
import Sports from './Sports.js';
import WifiCampus from '../NavigatedPages/WifiCampus.js'
import { FaLink } from 'react-icons/fa';
import Events from './Events'; // Import the Events component to use its content
import Nss from './Nss'; 
function CampusLife() {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    { id: 2, name: 'Events', component: <Events /> },
    { id: 8, name: 'Sports', component: <Sports /> },
    { id: 1, name: 'Field Work', component: <FieldWork/> },
    { id: 3, name: 'Educational Tour', component: <EducationalTour />},
    { id: 4, name: 'Laboratory', component: <Laboratory />},
    { id: 5, name: 'Library', component: <Library />},
    { id: 6, name: 'Hostel', component: <Hostel />},
    { id: 7, name: 'NSS', component: <Nss />}
      
  ];

  useEffect(() => {
    if (sections.length > 0) {
      setSelectedSection(sections[0].id); // Select the first section initially
    }
  }, []);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  return (
    <div>
      {/* <div className='campus-life-heading'>
        <div className='headingText'>CAMPUS LIFE</div>
      </div> */}
      <div className="campus-life-container">
        <div className="sections-list">
          {sections.map(section => (
            <div
              key={section.id}
              className={`section-item  ${selectedSection === section.id ? 'selected ' : ''}`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.name}
            </div>
          ))}
        </div>
        <div className="section-details">
          {selectedSection !== null && (
            <div className="details-box">
              {sections.find(section => section.id === selectedSection).component || (
                <div>
                  <h2>{sections.find(section => section.id === selectedSection).name}</h2>
                  <p>{sections.find(section => section.id === selectedSection).content || 'No additional information available.'}</p>
                  {sections.find(section => section.id === selectedSection).img && (
                    <img
                      src={sections.find(section => section.id === selectedSection).img}
                      alt={sections.find(section => section.id === selectedSection).name}
                      className="img-container"
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CampusLife;
