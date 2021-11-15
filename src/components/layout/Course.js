import React from 'react';
import logo1 from '../images/schedule-24px.svg';
import logo2 from '../images/date_range-24px.svg';
import { Link } from 'react-router-dom';

const Course = ({
  image,
  category,
  title,
  number,
  time,
  lectures,
  instructor,
  price1,
  price2,
}) => {
  return (
    <Link to='/'>
      <div
        className='card shadow course'
        style={{ borderRadius: '10px', backgroundColor: 'white' }}
      >
        <div>
          <img
            src={image}
            alt='Course-img'
            style={{
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
            }}
          />
          <div
            className='badge right'
            style={{
              position: 'relative',
              bottom: '50px',
              right: '10px',
              backgroundColor: 'black',
              color: '#01cb63',
            }}
          >
            {category}
          </div>
        </div>
        <div style={{ paddingLeft: '14px', paddingRight: '14px' }}>
          <div
            className='text-bold text-small'
            style={{
              marginBottom: '15px',
            }}
          >
            {title}
          </div>
          <h3>
            {number} <i className='text-thin'>Students</i>
          </h3>
          <div className='text-grey my-1 flex'>
            <div className='vertical-center'>
              <img src={logo1} style={{ width: '1.2rem' }} />
              <span className='text-smaller text-bold text-italic'>{time}</span>
            </div>
            <div className='vertical-center'>
              <img src={logo2} style={{ width: '1.2rem' }} />
              <span className='text-smaller text-bold text-italic'>
                {lectures} Lectures
              </span>
            </div>
          </div>
          <div
            className=' flex'
            style={{
              paddingTop: '2px',
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              borderTopColor: '#E2E2E2',
            }}
          >
            <div className='flex vertical-center'>
              <img
                className=''
                src='https://pixomatic.us/blog/wp-content/uploads/2019/11/pixomatic_1572877090227.png'
                style={{ width: '3rem', borderRadius: '100%' }}
              />
              <h3 className=' p-1'>{instructor}</h3>
            </div>
            <div className='flex vertical-center' style={{ paddingTop: '4px' }}>
              <h4 className='text-green '>₹{price1}</h4>
              <h5
                className='text-thin '
                style={{ textDecorationLine: 'line-through' }}
              >
                ₹{price2}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
