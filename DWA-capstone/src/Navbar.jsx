import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <nav className="nav--bar">
      {/* <img src="../images/logo.svg" className="nav--logo" /> */}
      <p className="nav--logo">POD IS IN THE DETAILS</p>
      <div className="nav--icons">
      <Link to="/"> 
      <img src="../images/home-filled-white.svg" className="nav--icon" />
      </Link> 
      <Link to="/search">
          <img src="../images/search-fill-white.svg" className="nav--icon" />
        </Link>
      <Link to="/favourites">
        <img src="../images/star-fill-white.svg" className="nav--icon" />
        </Link>

      </div>
    </nav>
  );
}