import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Get in Touch</h1>
        <p className="p__opensans">123 Nairobi Avenue, Nairobi, 10019, Kenya</p>
        <p className="p__opensans">Call us: +254 706 322944</p>
        <p className="p__opensans">Or: +254 717 248673</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" className="footer-logo" />
        <p className="p__opensans">
          “A community’s strength lies in its service to others.”
        </p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="decorative-spoon" />
        <div className="app__footer-links_icons">
          <FiFacebook className="social-icon" />
          <FiTwitter className="social-icon" />
          <FiInstagram className="social-icon" />
          <FiLinkedin className="social-icon" />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Our Hours</h1>
        <p className="p__opensans">Mon-Fri:</p>
        <p className="p__opensans">06:00 AM - 12:00 AM</p>
        <p className="p__opensans">Sat-Sun:</p>
        <p className="p__opensans">07:00 AM - 11:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2025 TastyBites. A place to enjoy, connect, and create memories. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

