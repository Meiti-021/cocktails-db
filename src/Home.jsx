import React, { useEffect } from "react";
import axios from "axios";
import Card from "./card";
import "./home.css";
import { useGlobalContext } from "./context";
import Loading from "./loading";
const Home = () => {
  const { dataBase, setDataBase } = useGlobalContext();
  useEffect(() => {
    axios("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(
      (res) => {
        setDataBase(res);
        console.log(res.data.drinks);
      }
    );
  }, []);
  if (!dataBase) {
    return <Loading />;
  }
  return (
    <div className="home">
      <section className="search">
        <h3>Search Your Favorite Cocktail</h3>
        <input type="search" name="search" id="search" />
      </section>
      <section className="products">
        <h1>cocktails</h1>
        <div className="product-container">
          {dataBase.data.drinks.map((drink) => {
            return <Card {...drink} key={drink.idDrink} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
