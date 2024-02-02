import React from "react";
import { Link } from "react-router-dom";

const Snack2 = () => {
    return (
        <div>
            <h2>Snack 2</h2>
            <p>This is snack 2. Yummy!</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
};

export default Snack2;