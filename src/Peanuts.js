import React from "react";
import { Link } from "react-router-dom";

const Peanuts = () => {
    return (
        <div>
            <h2>Peanuts</h2>
            <p>Peanuts are healthy for you!</p>
            <Link to="/">Back to Vending Machine</Link>
            <img
          src="https://sp.yimg.com/ib/th?id=OPHS.xWw5gOYeVQ%2fQsA474C474&o=5&pid=21.1&w=160&h=105"
          alt="Vending Machine Image"
        />
        </div>
    );
};

export default Peanuts;

