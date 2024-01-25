import React, { useState } from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo"></div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu className="hamburger" />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul className='navlinks'>
            <li>
              <NavLink to="/" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faHome}  style={{ marginRight: '10px' }}/>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faUser}  style={{ marginRight: '10px' }}/>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faCode}  style={{ marginRight: '10px' }}/>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faFileAlt}  style={{ marginRight: '10px' }}/>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeNavbar}>
                <FontAwesomeIcon icon={faEnvelope}  style={{ marginRight: '10px' }}/>
                Contact me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
