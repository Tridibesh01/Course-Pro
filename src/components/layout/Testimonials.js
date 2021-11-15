import React from 'react';
import Testimonial from './Testimonial';
import logo1 from '../images/luis/luis.png';
import logo2 from '../images/craig/craig.png';

const Testimonials = () => {
  return (
    <div>
      <div className='width-set p-5'>
        <h2 className='sub-headings text-thin text-italic text-small text-green'>
          <i>Testimonials</i>
        </h2>
        <h1 className='sub-headings' style={{ width: '50%' }}>
          Check Out What Our Students Think About Us
        </h1>
        <div className='grid-2 py-3'>
          <Testimonial
            image={logo1}
            content="It's a comprehensive online learning platform for everyone looking to learn and course pro. provinding this platform which is very beneficial for practicals. Students can revise everything at home like dissection and slides"
            name='Anshul Jain'
          />
          <Testimonial
            image={logo2}
            content="It's A Comprehensive Online Learning Platform For Everyone Looking To Learn And Course Pro. Provinding This Platform Which Is Very Beneficial For Practicals. Students Can Revise Everything At Home Like Dissection And Slides"
            name='Rajkumar Jain'
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
