import React from 'react';
import Course from './Course';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className='p-4 above width-set'>
      <h2 className='text-center text-thin text-italic text-small text-green'>
        Courses
      </h2>
      <h1 className='text-center'>Our Most Popular Courses</h1>
      <div className='grid-3 courses py-3'>
        <Course
          image='https://media.istockphoto.com/photos/hispanic-female-studying-on-laptop-picture-id1182745546?k=20&m=1182745546&s=612x612&w=0&h=muGWGHanzIZGIvv-qNKWB0CgfLsXTyA73fHUDrX9ZGk='
          category='Business'
          title='Ultimate Business Intelligence Analyst A to Z Course 2021'
          number='46,995'
          time='11 hr 20 mins'
          lectures='44'
          instructor='Albert Hitler'
          price1='2000'
          price2='2500'
        />
        <Course
          image='https://shotkit.com/wp-content/uploads/2020/08/photoshop-history.jpg'
          category='Design'
          title='Adobe Photoshop Training: From Beginner to Pro'
          number='6,995'
          time='6 hr 20 mins'
          lectures='24'
          instructor='Wanda Willson'
          price1='3000'
          price2='3500'
        />
        <Course
          image='https://www.ooma.com/wp-content/uploads/blog/2019/01/business-phone-cost-comparison.jpg'
          category='Marketing'
          title='Social Media Marketing - A to Z Content Marketing class 2021'
          number='46,995'
          time='11 hr 20 mins'
          lectures='44'
          instructor='Albert Hitler'
          price1='2000'
          price2='2500'
        />
      </div>
    </div>
  );
};

export default Courses;
