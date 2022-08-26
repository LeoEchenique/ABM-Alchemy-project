import React from "react";
import { Routes, Route, } from 'react-router-dom';
import BeforeHome from "./components/beforeHome/BeforeHome.jsx"
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<BeforeHome />} />
      </Routes>
    </div>
  );
}

export default App;
