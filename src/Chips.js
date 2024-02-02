import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    return (
        <div>
            <h2>Lays Chips</h2>
            <p>This is the best chips on the market right now!</p>
            <Link to="/">Back to Vending Machine</Link>
            <img
          src="https://tse3.mm.bing.net/th?id=OIP.tVUWz_iBkGJt5fK0A4TXzAHaHa&pid=Api&P=0&h=220"
          alt="Vending Machine Image"
        />
        </div>
    );
};

export default Chips;
