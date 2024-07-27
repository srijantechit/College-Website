import React from 'react';
import './App.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'; // Example: using Font Awesome icons

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className='slick-arrow' onClick={onClick}>
      <FaAngleRight />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className='slick-arrow' onClick={onClick}>
      <FaAngleLeft />
    </div>
  );
};

export { CustomNextArrow, CustomPrevArrow };
