import React from 'react';
import './Dashboard.css'
import { useState, useEffect } from 'react';

function Dashboard() {
    const [selectedSection, setSelectedSection] = useState(null);

    const sections = [
      { id: 1, name: 'Ongoing Event'},
      { id: 2, name: 'Notice Board'},
     
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

export default Dashboard