import React from "react";
import NavBar from "./NavBar";
import Snack1 from "./Snack1";
import Snack2 from "./Snack2";
import Snack3 from "./Snack3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendingMachine from './VendingMachine';
import './App.css';

function App() {
  return (
    <div className="App">
             <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<VendingMachine />} />
                    <Route path="/snack1" element={<Snack1 />} />
                    <Route path="/snack2" element={<Snack2 />} />
                    <Route path="/snack3" element={<Snack3 />} />
                </Routes>
            </Router>


        </div>
    )
}



export default App;
