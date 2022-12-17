import React, { useState } from "react";
import "./card.css";

const Card = ({ drink }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div className="card">
      <img src={drink.strDrinkThumb} alt="" className="cock-pic" />
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
          <p className="name">{drink.strDrink}</p>
          <p className="glass">{drink.Cocktail.glass}</p>
          <p className="category">{drink.strAlcoholic}</p>
          <button className="more">DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
