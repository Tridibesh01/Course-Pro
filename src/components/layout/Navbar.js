import React from 'react';
import logo from '../images/Group-3.svg';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <img
          src={logo}
          alt='brand-logo'
          style={{
            height: '55px',
            width: '212px',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        />
        <ul>
          <li
            className='all-center'
            style={{ marginLeft: '1rem', marginRight: '1rem' }}
          >
            <a className='text-bold' href='/' style={{ color: 'black' }}>
              Login
            </a>
          </li>
          <li
            className='all-center'
            style={{ marginLeft: '1rem', marginRight: '1rem' }}
          >
            <button
              className='btn shadow text-italic'
              style={{
                color: 'white',
                backgroundColor: '#01CB63',
                borderRadius: '10px',
              }}
            >
              Register
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
