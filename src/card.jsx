import React, { useState } from "react";
import "./card.css";

const Card = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div className="card">
      <img
        src="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"
        alt=""
        className="cock-pic"
      />
      <div
        className={
          toggle
            ? "cock-info-container active-card-info"
            : "cock-info-container"
        }
      >
        <button
          className={toggle ? "tuggle tuggle-on" : "tuggle"}
          onClick={toggleHandler}
        >
          ^
        </button>
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
