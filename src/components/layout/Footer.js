import React from 'react';

const Footer = () => {
  return (
    <div className='width-set p-3 flex'>
      <h3 style={{ margin: '5px', fontSize: '1rem' }}>
        2021-2022 © Course Pro Private Limited
      </h3>
      <div className='flex'>
        <h3 style={{ margin: '5px', fontSize: '1rem' }}>Term & Condition</h3>
        <h3 style={{ margin: '5px', fontSize: '1rem' }}>Privacy Policy</h3>
      </div>
    </div>
  );
};

export default Footer;
