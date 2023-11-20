import React from "react"
import './index.css'

export default function Navbar() {
    return (
        <nav className="nav--bar">
            <img src="../images/logo.svg" className="nav--logo" />
            <img src="../images/search.png" className="nav--search" />
        </nav>
    )
}