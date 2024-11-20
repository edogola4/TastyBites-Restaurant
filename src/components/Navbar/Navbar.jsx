import React, { useState, useCallback } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // Toggle function optimized with useCallback
  const handleToggleMenu = useCallback(() => {
    setToggleMenu((prev) => !prev);
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src={images.G || 'fallback-logo.png'}
          alt="Restaurant Logo"
          className="app__navbar-logo-img"
        />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">Our Story</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards & Recognition</a></li>
        <li className="p__opensans"><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Login</a>
        <div />
        <a href="/book-table" className="p__opensans">Reserve a Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <button
          aria-label="Open navigation menu"
          className="hamburger-menu"
          onClick={handleToggleMenu}
        >
          <GiHamburgerMenu color="#fff" fontSize={27} />
        </button>
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <button
              aria-label="Close navigation menu"
              className="overlay__close"
              onClick={handleToggleMenu}
            >
              <MdOutlineRestaurantMenu fontSize={27} />
            </button>
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={handleToggleMenu}>Home</a></li>
              <li><a href="#about" onClick={handleToggleMenu}>Our Story</a></li>
              <li><a href="#menu" onClick={handleToggleMenu}>Menu</a></li>
              <li><a href="#awards" onClick={handleToggleMenu}>Awards & Recognition</a></li>
              <li><a href="#contact" onClick={handleToggleMenu}>Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
