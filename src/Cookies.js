import React from "react";
import { Link } from "react-router-dom";

const Cookies = () => {
    return (
        <div>
            <h2>Cookies</h2>
            <p>This is yummy!</p>
            <Link to="/">Back to Vending Machine</Link>

            <img
          src="https://sp.yimg.com/ib/th?id=OPHS.QExSk4ngW%2fKXFw474C474&o=5&pid=21.1&w=160&h=105"
          alt="Vending Machine Image"
        />
        </div>
    );
};

export default Cookies;