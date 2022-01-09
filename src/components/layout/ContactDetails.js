import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactDetails = () => {
  return (
    <div className='hor-center contact-details'>
      <h1 className='text-medium text-700 py-3'>Contact Info</h1>

      <div className='text-grey'>
        <div>
          <div className='left contact-icon'>
            <EmailIcon />
          </div>
          <h5 className='text-200 py-1'>tridibeshnaik102001@gmail.com</h5>
        </div>

        <div>
          <div className='left contact-icon'>
            <PhoneIcon />
          </div>
          <h5 className='text-200 py-1'>6372945945</h5>{' '}
        </div>
        <div>
          <div className='left contact-icon'>
            <LocationOnOutlinedIcon />
          </div>
          <h5 className='text-200 py-1'>Maa Shyama Enclave, Bargarh, Odisha</h5>
        </div>
      </div>

      <h1 className='text-medium text-700 py-3' style={{ marginTop: '30px' }}>
        Social Media Channel
      </h1>
      <div className='social-container'>
        <a href='https://www.linkedin.com/in/tridibesh-naik-859559183/'>
          <img src='https://cdn-icons-png.flaticon.com/512/145/145807.png' />
        </a>
        <a href='https://www.facebook.com/tridibesh.naik'>
          <img src='https://cdn-icons-png.flaticon.com/512/145/145802.png' />
        </a>
        <a href='https://github.com/Tridibesh01?tab=repositories'>
          <img src='https://cdn-icons-png.flaticon.com/512/2111/2111425.png' />
        </a>
      </div>
    </div>
  );
};

export default ContactDetails;
