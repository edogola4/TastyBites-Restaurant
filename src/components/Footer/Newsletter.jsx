import React, { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      setMessageVisible(true);
      setValidEmail(true);
      setTimeout(() => setMessageVisible(false), 3000); // Auto-hide success message
      setEmail(''); // Clear the input
    } else {
      setValidEmail(false);
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Stay Connected" />
        <h1 className="headtext__cormorant">Join Our Community</h1>
        <p className="p__opensans">Get the latest updates, offers, and news directly in your inbox!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          className={!validEmail ? 'invalid shake' : ''}
        />
        <button type="button" onClick={handleSubmit} className="custom__button">
          Subscribe Now
        </button>
      </div>
      {messageVisible && (
        <p className="app__newsletter-success-message visible slide-up">
          Thank you for subscribing! We'll keep you updated.
        </p>
      )}
      {!validEmail && (
        <p className="app__newsletter-error-message fade-in">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default Newsletter;
