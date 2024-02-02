import React from "react";
import NavBar from "./NavBar";
import Chips from "./Chips";
import Peanuts from "./Peanuts";
import Cookies from "./Cookies";
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
                    <Route path="/chips" element={<Chips />} />
                    <Route path="/peanuts" element={<Peanuts />} />
                    <Route path="/cookies" element={<Cookies />} />
                </Routes>
            </Router>


        </div>
    )
}



export default App;
