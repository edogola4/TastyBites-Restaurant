import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.yourLogo} alt="restaurant_logo" /> {/* Replace with your logo */}
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">Our Story</a></li> {/* Update "About" to something like "Our Story" */}
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards & Recognition</a></li> {/* Update to reflect your accolades */}
        <li className="p__opensans"><a href="#contact">Contact Us</a></li> {/* Update to something more personalized */}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Login / Sign Up</a> {/* Change to "Sign Up" if needed */}
        <div />
        <a href="/book-table" className="p__opensans">Reserve a Table</a> {/* Make sure the booking link is correct */}
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Our Story</a></li> {/* Updated link */}
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards & Recognition</a></li> {/* Updated link */}
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact Us</a></li> {/* Updated link */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
