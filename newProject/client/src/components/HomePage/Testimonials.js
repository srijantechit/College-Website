
import React, { useState, useEffect } from 'react';
import '../../App.css';

const Testimonial = () => {
    const slides = [
        {
            img: "../images/testimonials/img1.JPG",
            name: 'Shivshankar S. Khedekar',
            description: `As a student at College of Agriculture, Amkheda, I was provided with an exceptional learning environment that combined practical experiences with theoretical knowledge. The hands-on training and guidance from experienced faculty members helped me secure a position as an Agriculture Assistant. I'm grateful for the opportunities and support that this college has provided me, paving the way for a successful career in agriculture.`
        },
        {
            img: "../images/testimonials/img2.JPG",
            name: "Ganesh Bichare",
            description: `Studying at College of Agriculture, Amkheda has been a transformative experience for me. The college's focus on holistic education, including both academic excellence and personal development, has been instrumental in shaping my career. Today, I am proud to be serving as a Talathi, a position that allows me to contribute to rural development and support the agricultural community.`
        },
        {
            img:"../images/testimonials/img3.JPG" ,
            name: 'Yogesh Kale',
            description: 'As a student at College of Agriculture, Amkheda I had the chance to learn from some of the best minds in the field of agriculture. The diverse range of courses and extracurricular activities allowed me to explore various aspects of agriculture and find my true passion. This college has set a solid foundation for my future.'
        },
        {
            img:"../images/testimonials/img4.JPG" ,
            name: 'Harshal Theng',
            description: 'Studying at College of Agriculture, Amkheda has been a transformative experience. The hands-on training and practical knowledge I gained here have prepared me exceptionally well for my career in agronomy. The faculty members are extremely knowledgeable and always willing to help. I highly recommend this college to anyone interested in agriculture.'
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
                            <img className='student-img' src={process.env.PUBLIC_URL + slide.img} alt='slider-image' />
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
