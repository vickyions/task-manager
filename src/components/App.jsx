import React from "react";
import './App.css';

import useDarkMode from "./useDarkMode";
import Board from "./Board";
import List from "./List";


function App() {
    const [ , setIsDark] = useDarkMode();

  return (
    <div>
      <button onClick={() => setIsDark(isDark => !isDark)}>Dark Mode</button>
        <Board />
    </div>
  )
}

export default App
