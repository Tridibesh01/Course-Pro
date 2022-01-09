import React from 'react';

const ContactForm = () => {
  return (
    <div className='contact-form'>
      <h1 className='text-medium text-700 py-3'>Contact Info</h1>
      <form>
        <div className='grid-2'>
          <div>
            <input type='text' name='username' placeholder='Name' />
          </div>
          <div>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <div>
            <input type='text' name='phone' placeholder='Phone' />
          </div>
          <div>
            <input type='text' name='subject' placeholder='Subject' />
          </div>
        </div>
        <div className='text-area'>
          <textarea type='text' name='message' placeholder='Message' />
        </div>
        <buttton type='button' className='btn btn-lg btn-outline-primary'>
          Submit
        </buttton>
      </form>
    </div>
  );
};

export default ContactForm;
