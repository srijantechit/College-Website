import React, { useState, useEffect } from 'react';
import '../../App.css'

const Courses = () => {
    // State to manage which course description is currently selected
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Dummy data for courses (replace with actual data)
    const courses = [
        {
            id: 1,
            name: 'B.Sc. (Honours) (Agriculture)',
            duration: '4 Years (8 Semesters)',
            courseOverview:'The B.Sc. (Honours) Agriculture program is designed to provide students with a comprehensive understanding of agricultural science and practices. The course combines theoretical knowledge with practical skills to prepare students for various careers in agriculture and related fields. ',
        
        },
        {
            id: 2,
            name: 'Agri. Diploma School',
            duration: '2 Years',
            courseOverview:'The Diploma in Agriculture program is designed to provide students with foundational knowledge and skills in various aspects of agriculture. This course prepares students for practical agricultural work and equips them with the necessary skills to manage small-scale farms or work in agricultural enterprises.'
        },
        
    ];

    // Effect to set the first course as selected initially
    useEffect(() => {
        if (courses.length > 0) {
            setSelectedCourse(courses[0].id); // Select the first course
        }
    },[]); // Empty dependency array ensures this runs only once on mount

    // Function to handle click on a course name
    
    const handleCourseClick = (courseId) => {
        setSelectedCourse(courseId); // Always set the selected course to the clicked courseId
    };
    
    return (
        <div className="courses-container">
            {/* <div className='events-heading'>
                <img src={img1} alt='backgrund' className='eventsbg'/>
                <div className='headingText-cources'>C O U R C E S</div>
            </div> */}
            <div className='course-inner-container'>
                <div className="course-list">
                    {/* Render list of course names */}
                    {courses.map(course => (
                        <div>
                            <div
                                key={course.id}
                                className={`course-item ${selectedCourse === course.id ? 'selected' : ''}`}
                                onClick={() => handleCourseClick(course.id)}
                                style={{ backgroundColor: selectedCourse === course.id ? '#6a994e' : 'inherit' }}
                            >
                                {course.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="course-details">
                    {/* Render course description based on selectedCourse */}
                    {selectedCourse !== null && (
                        <div className="details-box-admission ">
                            <div className='course-duration'>{courses.find(course => course.id === selectedCourse).duration} </div>
                            <div className='course-desc'>{courses.find(course => course.id === selectedCourse).courseOverview} </div>
                            
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    );
}

export default Courses;
