// import React from 'react';
// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import { GiHamburgerMenu } from 'react-icons/gi';
// import '../index.css'

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">
//         </div>
//         <div className="menu-icon" onClick={handleShowNavbar}>
//           <GiHamburgerMenu />
//         </div>
//         <div className={`nav-elements  ${showNavbar && 'active'}`}>
//           <ul className='navlinks'>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/projects">Projects</NavLink>
//             </li>
//             <li>
//               <NavLink to="/resume">Resume</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
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
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul className='navlinks'>
            <li>
              <NavLink to="/" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeNavbar}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeNavbar}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" onClick={closeNavbar}>
                Resume
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
