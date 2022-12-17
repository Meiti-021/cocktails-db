import React from "react";
import gif from "./assets/beer.gif";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={gif} alt="" />
      <h1>LOADING...</h1>
    </div>
  );
};

export default Loading;
