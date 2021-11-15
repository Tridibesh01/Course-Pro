import React from 'react';
import { useState, useEffect } from 'react';
import validator from 'validator';

const ContactForm = () => {
  const initialValues = {
    username: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors.length === 0 && isSubmit)) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.username) {
      errors.username = 'Name is required.';
    }
    if (!values.email) {
      errors.email = 'Email is required.';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format';
    }
    if (!values.phone) {
      errors.phone = 'Phone is required.';
    }
    if (!values.subject) {
      errors.subject = 'Subject is required.';
    }
    if (!values.message) {
      errors.message = 'Message is required.';
    }
    return errors;
  };

  return (
    <div className='container py-3' style={{ width: '80%' }}>
      <h2 className='text-center' style={{ top: '0' }}>
        Fill up the form and our team will get back to you within 24 hours
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='grid-2 form-blanks py-2'>
          <div>
            <input
              className='form-control'
              type='text'
              name='username'
              value={formValues.name}
              onChange={handleChange}
              placeholder='Name'
            />
            <p>{formErrors.username}</p>
          </div>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
          </div>
          <div>
            <input
              type='text'
              name='phone'
              placeholder='Phone'
              value={formValues.phone}
              onChange={handleChange}
            />
            <p>{formErrors.phone}</p>
          </div>
          <div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              value={formValues.subject}
              onChange={handleChange}
            />
            <p>{formErrors.subject}</p>
          </div>
        </div>
        <div>
          <textarea
            type='text'
            name='message'
            placeholder='Message'
            value={formValues.message}
            onChange={handleChange}
          />
          <p>{formErrors.message}</p>
        </div>
        <button
          className='btn btn-lg btn-block text-thin text-italic'
          type='submit'
          style={{
            width: '40%',
            margin: 'auto',
            marginTop: '20px',
            backgroundColor: 'black',
            borderRadius: '10px',
            color: 'white',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
