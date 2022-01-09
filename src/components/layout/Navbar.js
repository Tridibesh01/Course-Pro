import React, { useState } from "react";
// import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        navbar
          ? "navbar active all-center text-400"
          : "navbar all-center text-400"
      }
    >
      {/* <a href='' className='toggle-button'>
        <MenuIcon style={{ fontSize: '35px' }} />
      </a> */}
      <ul>
        <li className="navbar-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
