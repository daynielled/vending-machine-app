import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';


function NavBar() {
    return (
        <nav className="NavBar">
            <Link to="/chips">Chips</Link>
            <Link to="/peanuts">Peanuts</Link>
            <Link to="/cookies">Cookies</Link>

        </nav>
    )
}

export default NavBar;
