import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <section className="search">
        <h3>Search Your Favorite Cocktail</h3>
        <input type="search" name="search" id="search" />
      </section>
    </div>
  );
};

export default Home;
