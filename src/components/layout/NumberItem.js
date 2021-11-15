import React from 'react';

const NumberItem = ({ title, number }) => {
  return (
    <div className='container'>
      <h2 style={{ color: 'grey' }}>{title}</h2>
      <div>
        <h1
          className='large'
          style={{
            display: 'inline-block',
            borderBottomStyle: 'solid',
            borderBottomColor: '#01CB63',
          }}
        >
          {number}
        </h1>
      </div>
    </div>
  );
};

export default NumberItem;
