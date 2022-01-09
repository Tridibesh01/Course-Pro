import React, { useState } from 'react';
import Slider from 'react-slick';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Aos from 'aos';
import 'aos/dist/aos.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='className'
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        right: '10px',
        top: '120px',
        zIndex: '1',
      }}
      onClick={onClick}
    >
      <ArrowRightIcon style={{ fontSize: '50px' }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='className'
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        left: '10px',
        top: '120px',
        zIndex: '1',
      }}
      onClick={onClick}
    >
      <ArrowLeftIcon style={{ fontSize: '50px' }} />
    </div>
  );
}

const Certificates = () => {
  Aos.init();

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='certificates-section'>
      <div
        data-aos='fade-up'
        data-aos-delay='200'
        data-aos-duration='1000'
        data-aos-once='true'
      >
        <h1 className='large text-600 text-center'>Courses</h1>
        <h5 className='text-400 text-center text-grey'>Completed.</h5>
        <div className='small-hr'></div>
      </div>
      <div
        data-aos='fade-up'
        data-aos-delay='500'
        data-aos-duration='1000'
        data-aos-once='true'
      >
        <Slider {...settings}>
          <div>
            <div className='all-center certificate'>
              <img
                src='https://img-b.udemycdn.com/course/240x135/1565838_e54e_14.jpg?secure=fmRE3XoIG8_M0gf5wDcBBQ%3D%3D%2C1638711534'
                alt='Course Img...'
              />
              <h5>The Complete 2022 Web Development Bootcamp</h5>
              <p className='text-grey text-italic'>- Angela Yu </p>
              <button className='btn btn-primary'>View Certificate</button>
            </div>
          </div>
          <div>
            <div className='all-center certificate'>
              <img
                src='https://img-c.udemycdn.com/course/240x135/2395488_bd78_2.jpg'
                alt='Course Image...'
              />
              <h5>React Front To Back</h5>
              <p className='text-italic text-grey'>- Brad Traversy </p>
              <button className='btn btn-primary'>View Certificate</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Certificates;
