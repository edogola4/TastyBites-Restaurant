import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Exquisite Cuisine, Unforgettable Moments" />
      <h1 className="app__header-h1">Welcome to TastyBites</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Discover the art of fine dining with TastyBites. From farm-fresh ingredients to world-class recipes, we craft an unforgettable culinary journey. Relax in our luxurious ambiance, perfect for celebrations or intimate evenings. Savor the flavors, cherish the memories.
      </p>
      <button type="button" className="custom__button glow-button">
        Explore Our Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img
        src={images.welcome}
        alt="Elegant Dining at TastyBites"
        className="header__image"
      />
    </div>
  </div>
);

export default Header;
