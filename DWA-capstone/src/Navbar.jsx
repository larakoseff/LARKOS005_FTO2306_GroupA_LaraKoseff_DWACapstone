import React from "react";
import './index.css';

export default function Navbar() {
    return (
        <nav className="nav--bar">
            <img src="../images/logo.svg" className="nav--logo" />
            <div className="nav--icons">
                <img src="../images/star-fill.svg" className="nav--icon" />
                <img src="../images/search.png" className="nav--icon" />
            </div>
        </nav>
    );
}