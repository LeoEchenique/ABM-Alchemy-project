import React from "react";
import { Routes, Route, } from 'react-router-dom';
import BeforeHome from "./components/beforeHome/BeforeHome.jsx";
import Home from "./components/_home/Home.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<BeforeHome />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
