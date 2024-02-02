import React from "react";
import { Link } from "react-router-dom";

const Snack3 = () => {
    return (
        <div>
            <h2>Snack 3</h2>
            <p>This is snack 3. Yummy!</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
};

export default Snack3;