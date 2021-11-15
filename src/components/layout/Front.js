import React from 'react';
import NumberItem from './NumberItem';
import logo from '../images/Group-12141.svg';

const Front = () => {
  return (
    <div className='front'>
      <div
        style={{
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/1280px-Books_HD_%288314929977%29.jpg")`,
          backgroundSize: 'cover',
        }}
      >
        <div className='p-5 front-text'>
          <h1 className='x-large'>
            Anytime, Anywhere Learn On Your Schedule From Any Device
          </h1>
          <h2 className='text-thin text-italic' style={{ color: 'black' }}>
            We Believe everyone has the capacity to be creative
          </h2>
          <h2>
            <b style={{ fontWeight: 'bolder' }}>Course Pro</b>{' '}
            <i className='text-thin' style={{ color: 'black' }}>
              is a place where people develop their own potential
            </i>
          </h2>
          <button
            className='btn my-1'
            style={{
              color: 'white',
              backgroundColor: 'black',
              borderRadius: '10px',
              fontSize: '1.3rem',
            }}
          >
            <i>Let's Get Started</i>
          </button>
        </div>
      </div>
      <div
        className='above'
        style={{
          width: '100%',
          backgroundImage: `url(${logo})`,
          minWidth: '500px',
        }}
      >
        <div className='grid-3 numbers py-3'>
          <NumberItem title='Total Students' number='5140' />
          <NumberItem title='Partners' number='4123' />
          <NumberItem title='Affiliate Distribution' number='4.18 Lac' />
        </div>
      </div>
    </div>
  );
};

export default Front;
