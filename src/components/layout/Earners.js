import React from 'react';
import Earner from './Earner';
import logo1 from '../images/luis/luis.png';
import logo2 from '../images/craig/craig.png';
import logo3 from '../images/chris/chris.png';
import logo4 from '../images/jonas/jonas.png';

const Earners = () => {
  return (
    <div className='p-5 above width-set'>
      <h2 className='sub-headings text-thin text-italic text-small text-green'>
        Top Earners
      </h2>
      <h1 className='sub-headings ' style={{ width: '60%' }}>
        Transforming Your Ideas Into Reality
      </h1>
      <div className='grid-4 earners py-3'>
        <Earner image={logo1} income='8,00,000' />
        <Earner image={logo2} income='6,00,000' />
        <Earner image={logo3} income='5,00,000' />
        <Earner image={logo4} income='4,50,000' />
      </div>
    </div>
  );
};

export default Earners;
