import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Philosophy" />
      <h1 className="headtext__cormorant">Our Culinary Passion</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">"Cooking is more than just preparing food. It's an art—where every ingredient tells a story, and every dish reflects our heart and soul."</p>
        </div>
        <p className="p__opensans">"To me, the kitchen is where creativity comes alive. With every dish, I strive to honor the ingredients and allow them to shine in their purest form."</p>
      </div>

      <div className="app__chef-sign">
        <p>Brandon Ogola</p>
        <p className="p__opensans">Founder & Culinary Director</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
