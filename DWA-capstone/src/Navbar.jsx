import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <nav className="nav--bar">
      <img src="../images/logo.svg" className="nav--logo" />
      <div className="nav--icons">
      <Link to="/"> 
      <img src="../images/home-thin.svg" className="nav--icon" />
      </Link> 
      <Link to="/search">
          <img src="../images/search-thin.svg" className="nav--icon" />
        </Link>
      <Link to="/favourites">
        <img src="../images/star-fill.svg" className="nav--icon" />
        </Link>

      </div>
    </nav>
  );
}