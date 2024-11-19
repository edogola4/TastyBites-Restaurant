import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Welcome to TastyBites-Restaurant</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
      Welcome to TastyBites-Restaurant — where every bite tells a story. From the moment you walk through our doors, you’ll embark on a journey of culinary excellence. Each dish is thoughtfully crafted with the finest ingredients, passion, and creativity. Whether you're savoring an intimate dinner for two or celebrating life’s special moments with friends, our dedicated team ensures an unforgettable dining experience. At TastyBites, we believe that food is more than just a meal—it’s an experience that awakens the senses. Join us, and discover why we’re not just a restaurant; we’re a celebration of flavor, joy, and togetherness.
              </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
