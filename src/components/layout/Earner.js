import React from 'react';

const Earner = ({ image, income }) => {
  return (
    <div className='card' style={{ borderStyle: 'none' }}>
      <img src={image} alt='Earner-img' style={{ borderRadius: '3px' }} />
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '1.3rem',
          marginBottom: '10px',
          borderLeftStyle: 'solid',
          borderLeftWidth: '6px',
          borderLeftColor: '#01CB63',
          paddingLeft: '10px',
        }}
      >
        ₹ {income}
      </div>
    </div>
  );
};

export default Earner;
