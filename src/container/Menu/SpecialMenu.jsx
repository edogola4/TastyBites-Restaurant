import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    {/* Section Title */}
    <div className="app__specialMenu-title">
      <SubHeading title="Crafted to delight your taste buds" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    {/* Menu Sections */}
    <div className="app__specialMenu-menu">
      {/* Wine & Beer Section */}
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem 
              key={`wine-${index}`} 
              title={wine.title} 
              price={wine.price} 
              tags={wine.tags} 
            />
          ))}
        </div>
      </div>

      {/* Menu Image */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="Special Menu" />
      </div>

      {/* Cocktails Section */}
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem 
              key={`cocktail-${index}`} 
              title={cocktail.title} 
              price={cocktail.price} 
              tags={cocktail.tags} 
            />
          ))}
        </div>
      </div>
    </div>

    {/* View More Button */}
    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        Explore Full Menu
      </button>
    </div>
  </div>
);

export default SpecialMenu;
