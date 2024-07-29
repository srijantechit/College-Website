import React, { useState, useEffect } from 'react';
import '../../App.css'

const Courses = () => {
    // State to manage which course description is currently selected
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Dummy data for courses (replace with actual data)
    const courses = [
        {
            id: 1,
            name: 'Computer Science',
            description: ' development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.',
        },
        {
            id: 2,
            name: 'Electrical Engineering',
            description: 'Learn about electrical circuits, electronics, and power systems.Learn about electrical circuits, electronics, and power systems.Learn about electrical circuits, electronics, and power systems.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software Learn about electrical circuits, electronics, and power systems.v development.This course focuses on programming, algorithms, and software development.This course focuses on programming, algorithms, and software development.Learn about electrical circuits, electronics, and power systems.',
        },
        {
            id: 3,
            name: 'Mechanical Engineering',
            description: 'Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.Study mechanics, thermodynamics, and machine design principles.',
        },
        {
            id: 4,
            name: 'Business Administration',
            description: 'Explore management, finance, marketing, and entrepreneurshipExplore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship.Explore management, finance, marketing, and entrepreneurship..',
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
        <p className='important-headings courses-vertical-font'>
            <p>C</p>
            <p>O</p>
            <p>U</p>
            <p>R</p>
            <p>S</p>
            <p>E</p>
            <p>S</p>
        </p>
            <div className="course-list">
                {/* Render list of course names */}
                {courses.map(course => (
                    <div>
                        <div
                            key={course.id}
                            className={`course-item ${selectedCourse === course.id ? 'selected' : ''}`}
                            onClick={() => handleCourseClick(course.id)}
                            style={{ backgroundColor: selectedCourse === course.id ? '#dce499' : 'inherit' }}
                        >
                            {course.name}
                        </div>
                    </div>
                ))}
            </div>
            <div className="course-details">
                {/* Render course description based on selectedCourse */}
                {selectedCourse !== null && (
                    <div className="details-box">
                        {courses.find(course => course.id === selectedCourse).description}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Courses;
