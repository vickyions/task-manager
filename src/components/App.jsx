import React from "react";
import './App.css';

import Board from "./Board";
import Navbar from "./Navbar";
import CardPopup from "./CardPopup";


function App() {

  return (
    <div>
      <Navbar />
        <Board />
      <CardPopup />
    </div>
  )
}

export default App
