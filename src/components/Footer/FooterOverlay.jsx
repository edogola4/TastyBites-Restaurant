import React from 'react';
import './FooterOverlay.css';

const FooterOverlay = () => (
  <div className="app__footerOverlay">
    <div className="app__footerOverlay-black" />
    <div className="app__footerOverlay-img app__bg" />
    <div className="app__footerOverlay-content">
      <h2 className="app__footerOverlay-title">Stay Connected</h2>
      <p className="app__footerOverlay-description">
        Be the first to know about our latest updates, offers, and exclusive content!
      </p>
      <button className="app__footerOverlay-button">Subscribe Now</button>
    </div>
    <div className="app__footerOverlay-glow" />
  </div>
);

export default FooterOverlay;
