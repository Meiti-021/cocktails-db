import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <section className="search">
        <h3>Search Your Favorite Cocktail</h3>
        <input type="search" name="search" id="search" />
      </section>
      <section className="products">
        <h1>cocktails</h1>
        <div className="product-container"></div>
      </section>
    </div>
  );
};

export default Home;
