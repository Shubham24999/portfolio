import React, {  useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import './Navbar.css';
// 4. importing context 
import {MyContext} from "../Context/ScreenSizeProvider"


const Navbar = () => {

  const NavItem = [
    { path: '/', title: 'Home' },
    { path: '/projects', title: 'Projects' },
    { path: '/blog', title: 'Blogs' },
    { path: '/resume', title: 'Resume' },
    { path: '/contact', title: 'Contact' }
   
  ];

  // 5. Consuming Context
  const {isMobile}=useContext(MyContext);

  // const isMenuOpen=useState(true);

  return (
    <div className='nav'>
      <h1 className='nav1'>SKG.</h1>
      {isMobile ? (
        <div className='dropdown'>
          <button className='dropbtn'><MenuIcon /></button>
          <div className='dropdown-content'>
            {NavItem.map((link, id) => (
              <Link key={id} to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <ul className='navbarIcon'>
          {NavItem.map((link, id) => (
            <li key={id}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
