import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="NavBar">
            <Link to="/snack1">Chips</Link>
            <Link to="/snack2">Biscuits</Link>
            <Link to="/snack3">Cookies</Link>

        </nav>
    )
}

export default NavBar;
