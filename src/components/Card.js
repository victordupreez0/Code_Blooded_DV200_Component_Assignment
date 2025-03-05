import React from 'react';
import './Card.css';

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-title">
        <h5>{title}</h5>
      </div>
      <p className="card-description">
        {description}
      </p>
    </div>
  );
}

export default Card;