import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"
        alt=""
        className="cock-pic"
      />
      <div className="cock-info-container">
        <button className="tuggle">^</button>
        <div className="cock-info">
          <p className="name">GG</p>
          <p className="glass">Collins Glass</p>
          <p className="category">Optional alcohol</p>
          <button className="more">DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
