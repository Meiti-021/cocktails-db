import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./context";
import Loading from "./loading";
import "./detail.css";

const Detail = () => {
  const cock = useParams();
  const { cockDetail, setCockDetail } = useGlobalContext();
  useEffect(() => {
    axios(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cock.id}`
    ).then((res) => setCockDetail(res.data.drinks[0]));
  }, []);
  if (!cockDetail) {
    return <Loading />;
  }
  return (
    <div className="cock-detail">
      <img src={cockDetail.strDrinkThumb} alt="" className="cock-picture" />
      <div className="cock-detail-info">
        <p>
          id: <span>{cockDetail.idDrink}</span>
        </p>
        <p>
          name: <span>{cockDetail.strDrink}</span>
        </p>
        <p>
          category: <span>{cockDetail.strCategory}</span>
        </p>
        <p>
          glass: <span>{cockDetail.strGlass}</span>
        </p>
        <p>
          info: <span>{cockDetail.strAlcoholic}</span>
        </p>
      </div>
    </div>
  );
};

export default Detail;
