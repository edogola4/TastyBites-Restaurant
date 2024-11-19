import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Get in Touch" /> {/* More friendly title */}
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem', color: '#2D2D2D' }}>
        We’re Here for You!
      </h1> {/* A more inviting header */}
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ fontSize: '1.1rem', color: '#4A4A4A' }}>
        Find us nestled in the heart of Nairobi, CW9 75G. We're always here to welcome you and ready to offer assistance whenever you need it.
        </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0', fontSize: '1.2rem' }}>
          Opening Hours
        </p>
        <p className="p__opensans" style={{ fontSize: '1.1rem', color: '#4A4A4A' }}>
          Mon - Fri: 06:00 am - 12:00 am
        </p>
        <p className="p__opensans" style={{ fontSize: '1.1rem', color: '#4A4A4A' }}>
          Sat - Sun: 07:00 am - 03:00 am
        </p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{
          marginTop: '2rem',
          backgroundColor: '#DCCA87', // Changed color for a golden touch
          padding: '1rem 2rem',
          fontSize: '1rem',
          borderRadius: '30px',
          fontWeight: 'bold',
        }}
      >
        Visit Us & Explore
      </button> {/* Personalized button text */}
    </div>

    <div className="app__wrapper_img" style={{ borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <img src={images.findus} alt="findus_img" style={{ borderRadius: '10px', width: '100%', height: 'auto' }} />
    </div>
  </div>
);

export default FindUs;
