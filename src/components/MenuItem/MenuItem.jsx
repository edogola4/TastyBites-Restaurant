import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, tags, description, image }) => (
  <div className="app__menuitem" title={`Learn more about ${title}`}>
    <div className="app__menuitem-image">
      <img
        src={image}
        alt={title}
        className="app__menuitem-img"
      />
    </div>

    <div className="app__menuitem-details">
      <div className="app__menuitem-header">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: '#DCCA87', fontSize: '1.3rem' }}>
            {title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price" title={`Price: ${price}`}>
          <p className="p__cormorant" style={{ fontSize: '1.2rem' }}>{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: '#AAAAAA', fontSize: '1rem' }}>{tags}</p>
        {description && (
          <p
            className="p__opensans"
            style={{ color: '#C0C0C0', fontSize: '0.95rem', marginTop: '0.5rem' }}
            title="More details about this item"
          >
            {description}
          </p>
        )}
      </div>
    </div>
  </div>
);

export default MenuItem;
