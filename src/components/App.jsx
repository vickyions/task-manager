import React from "react";
import './App.css';

import useDarkMode from "./useDarkMode";
import Board from "./Board";
import List from "./List";


function App() {
    const [_, setIsDark] = useDarkMode();

  return (
    <div className="bg-white dark:bg-teal-800">
      <button onClick={_ => setIsDark(isDark => !isDark)}>Dark Mode</button>
        <Board />
    </div>
  )
}

export default App
