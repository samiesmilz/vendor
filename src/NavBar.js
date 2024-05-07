import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <button className="VM-button">Home</button>
      </Link>
      <Link to="/water">
        <button className="VM-button">Water</button>
      </Link>
      <Link to="juice">
        <button className="VM-button">Juice</button>
      </Link>
      <Link to="/soda">
        <button className="VM-button">Soda</button>
      </Link>
    </nav>
  );
};

export default NavBar;
