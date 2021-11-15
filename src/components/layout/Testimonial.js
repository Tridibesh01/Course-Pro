import React from 'react';
import logo from '../images/right-quotation-sign.svg';

const Testimonial = ({ content, name, image }) => {
  return (
    <div className='card testimonial above back-white'>
      <h3 className='text-thin text-italic my-1'>{content}</h3>
      <div className='left'>
        <img
          className='left'
          src={image}
          style={{ borderRadius: '100%', width: '3rem' }}
        />
      </div>

      <div className='left' style={{ paddingLeft: '6px' }}>
        <h4>{name}</h4>
        <span className='text-smaller text-thin text-italic text-grey'>
          Yesterday
        </span>
      </div>
      <img
        className='right'
        src={logo}
        style={{ width: '2rem', position: 'relative', top: '9px' }}
      />
    </div>
  );
};

export default Testimonial;
