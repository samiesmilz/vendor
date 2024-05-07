import React from "react";
import "./VendingMachine.css";
import animation from "./animation.gif";
import { Link } from "react-router-dom";
const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Welcome to Vendr.</h1>
      <p>So reshreshing...</p>
      <div className="VendorMachine-choices">
        <h4>Choose your reshreshing drink.</h4>
        <div>
          <Link to="/water">
            <button className="VM-button">Water</button>
          </Link>
          <Link to="juice">
            <button className="VM-button">Juice</button>
          </Link>
          <Link to="/soda">
            <button className="VM-button">Soda</button>
          </Link>
        </div>
        <img
          src={animation}
          className="VendorMachine-animation"
          alt="animation"
        />
      </div>
    </div>
  );
};

export default VendingMachine;
