import React from 'react';
import { images } from '../../constants'; // Ensure your images are correctly imported
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* Overlay with Fade Effect */}
    <div className="app__aboutus-overlay flex__center">
      {/*<img src={images.G} alt="Overlay Logo" className="app__overlay-img fade-in" />*/}
    </div>

    {/* Main Content */}
    <div className="app__aboutus-content flex__center">
      {/* About TastyBites Section */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About TastyBites</h1>
       {/*<img src={images.spoon} alt="Decorative Spoon" className="spoon__img pulse-animation" /> */}
        <p className="p__opensans">
          Nestled in Nairobi’s bustling heart, TastyBites brings you the soul of Kenya on a plate. We blend heritage, passion, and flavor to create a dining experience you won’t forget.
        </p>
        <p className="p__opensans">
          Our chefs craft dishes from locally-sourced, fresh ingredients, paying homage to Kenya’s rich culinary diversity. Whether it’s our signature stews or vegetarian delicacies, every bite tells a story.
        </p>
        <button type="button" className="custom__button glow-button">
          Learn More
        </button>
      </div>

      {/* Decorative Knife Section */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="Decorative Knife" className="knife__img fade-in" />
      </div>

      {/* Our Story Section */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img src={images.spoon} alt="Decorative Spoon" className="spoon__img pulse-animation" />
        <p className="p__opensans">
          Since 2025, Chef Brandon Ogola has pursued his dream of redefining Kenyan cuisine. With a blend of tradition and innovation, TastyBites is the embodiment of his culinary vision.
        </p>
        <p className="p__opensans">
          Let us take you on a flavorful journey through Kenya’s heritage with dishes that inspire and delight.
        </p>
        <button type="button" className="custom__button glow-button">
          Discover More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;