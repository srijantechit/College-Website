
import React, { useState, useEffect } from 'react';
import '../../App.css';

const Testimonial = () => {
    const slides = [
        {
            img: "../images/test1.jpg",
            name: 'Swaraj Gaonkar',
            description: 'As a student at College of Agriculture, Amkheda I had the chance to learn from some of the best minds in the field of agriculture. The diverse range of courses and extracurricular activities allowed me to explore various aspects of agriculture and find my true passion. This college has set a solid foundation for my future.'
        },
        {
            img: " ../images/test2.jpg",
            name: "Sunita Shaha",
            description: 'Studying at College of Agriculture, Amkheda has been a transformative experience. The hands-on training and practical knowledge I gained here have prepared me exceptionally well for my career in agronomy. The faculty members are extremely knowledgeable and always willing to help. I highly recommend this college to anyone interested in agriculture.'
        },
        {
            img:" ../images/test2.jpg" ,
            name: 'Mayuri Sharma',
            description: 'As a student at College of Agriculture, Amkheda I had the chance to learn from some of the best minds in the field of agriculture. The diverse range of courses and extracurricular activities allowed me to explore various aspects of agriculture and find my true passion. This college has set a solid foundation for my future.'
        }
        // Add more slides as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <>
            <div className='testimonials-heading'> Testimonials</div>
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div className="slide" key={index}>
                            {/* <img className='student-img' src={process.env.PUBLIC_URL + slide.img} alt='slider-image' /> */}
                            <div className='student-info'>
                            <h3 className='student-name'>{slide.name}</h3>
                            <p className='student-desc'>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="navigation-arrow">
                    <span className="prev" onClick={prevSlide}>&#10094;</span>
                    <span className="next" onClick={nextSlide}>&#10095;</span>
                </div>
                <div className="dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </>   
    );
};

export default Testimonial;
