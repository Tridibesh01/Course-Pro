import React from 'react';
import logo1 from '../images/Group-10748.svg';
import logo2 from '../images/Group-10749.svg';
import logo3 from '../images/Group-10750.svg';
import logo4 from '../images/Facebook.svg';
import logo5 from '../images/Twitter.svg';
import logo6 from '../images/Github.svg';
import logo7 from '../images/Linkedin.svg';

const ContactDetails = () => {
  return (
    <div className='container py-4'>
      <h1 className='py-1'>Contact Information</h1>
      <table>
        <tr>
          <td style={{ width: '10%' }}>
            <img src={logo3} style={{ width: '5rem' }} />
          </td>
          <td>
            <h3 style={{ position: 'relative', bottom: '9px' }}>
              contact@coursepro.com
            </h3>
          </td>
        </tr>
        <tr>
          <td style={{ width: '10%' }}>
            <img src={logo2} style={{ width: '5rem' }} />
          </td>
          <td>
            <h3 style={{ position: 'relative', bottom: '9px' }}>
              1800-562-895, 1800-869-877
            </h3>
          </td>
        </tr>
        <tr>
          <td style={{ width: '10%' }}>
            <img src={logo1} style={{ width: '5rem' }} />
          </td>
          <td>
            <h3 style={{ position: 'relative', bottom: '9px' }}>
              102 Street, India
            </h3>
          </td>
        </tr>
      </table>
      <h1 style={{ marginTop: '30px' }}>Social Media Channel</h1>
      <a href='/'>
        <img src={logo4} className='social-media' />
      </a>
      <a href='/'>
        <img src={logo5} className='social-media' />
      </a>
      <a href='/'>
        <img src={logo6} className='social-media' />
      </a>
      <a href='/'>
        <img src={logo7} className='social-media' />
      </a>
    </div>
  );
};

export default ContactDetails;
