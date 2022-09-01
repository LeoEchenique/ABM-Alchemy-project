import React from "react";
import { Routes, Route, } from 'react-router-dom';
import BeforeHome from "./components/beforeHome/BeforeHome.jsx";
import Home from "./components/_home/Home.jsx"
import NewOperation from "./components/New_Operation/NewOperations.jsx";
/* import Nav from "./components/Nav/Nav.jsx"; */
import style from "./App.module.css"
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = "308904360487-j1cp17cc55ecru05t864g5psr8ckbtbv.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className={style.App}>
        <Routes>
          <Route exact path="/" element={<BeforeHome />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Home/Operations/NewOperation/" element={<NewOperation />} />
          <Route exact path="/Home/Operations/NewOperation/:id" element={<NewOperation />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;


