import React from "react";
import { Link } from "react-router-dom";

const Snack1 = () => {
    return (
        <div>
           
            <p>This is snack 1. Yummy!</p>
            <Link to="/">Back to Vending Machine</Link>
        </div>
    );
};

export default Snack1;