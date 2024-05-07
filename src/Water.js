import React from "react";
import wtr from "./watercool.gif";
import "./Water.css";
const Water = () => {
  return (
    <div className="Water">
      <h1>Vendr Water.</h1>
      <p>Welcome to the natural side...</p>
      <img className="Water-cool" src={wtr} alt="drinking water" />
      <p>Every sip brings new life</p>
    </div>
  );
};

export default Water;
