import React from 'react';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <div>
      <div className='width-set p-5'>
        <div className='text-center'>
          <h2 className='sub-headings' style={{ color: '#01CB63' }}>
            Contact Us
          </h2>
          <h1
            className='sub-headings'
            style={{ fontWeight: '400', width: '50%', margin: 'auto' }}
          >
            Reach Out With Any Question You Have
          </h1>
        </div>
        <div className='grid-3 py-3'></div>
      </div>
      <div className='width-set' style={{ backgroundColor: '#F8F9FB' }}>
        <div className='grid-2 contact-details'>
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
