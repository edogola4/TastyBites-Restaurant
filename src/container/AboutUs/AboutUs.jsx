import React from 'react';
import { images } from '../../constants';  // Ensure your images are correctly imported
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      {/* About Us Section */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About TastyBites</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome to TastyBites, an authentic Kenyan restaurant nestled in the vibrant heart of Nairobi. At TastyBites, we don't just serve food – we serve stories, heritage, and passion in every dish. Our menu is a journey through Kenya's diverse flavors, with a selection of both classic and contemporary dishes that celebrate our rich culinary culture.
        </p>
        <p className="p__opensans">
          From aromatic stews and grilled meats to our signature vegetarian delights, every dish is crafted with the finest locally-sourced ingredients. We partner with smallholder farmers and local markets to bring you the freshest produce, ensuring each bite is as sustainable as it is delicious. 
        </p>
        <p className="p__opensans">
          Whether you're here for a cozy dinner, a lively family gathering, or a casual lunch break, TastyBites offers a place where you can experience the heart of Kenya's flavors, all while enjoying our warm, inviting atmosphere. Welcome to our family – we can’t wait to share our love for food with you.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      {/* Knife Section */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      {/* Our History Section */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          TastyBites was founded in 2025 by Chef Brandon Ogola, a culinary artist who grew up in Kisumu. With over two decades of experience perfecting traditional Kenyan dishes, Chef Ogola brings a personal touch to every plate. His journey from a small village to the heart of Nairobi is woven into the fabric of TastyBites's story – one of passion, authenticity, and community.
        </p>
        <p className="p__opensans">
          From humble beginnings to becoming a local favorite, TastyBites is a reflection of Chef Ogola’s commitment to preserving Kenya’s culinary legacy while embracing modern influences. Join us and be part of our ever-growing story.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
