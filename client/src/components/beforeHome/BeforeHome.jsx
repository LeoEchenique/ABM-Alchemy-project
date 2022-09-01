import React from "react";
import style from "./beforeHome.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { googleLogout } from "@react-oauth/google";
//client id should be the ID credential of google

export default function BeforeHome() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const logout = () => {
    localStorage.removeItem("loginData");
    setLoginData(null);
  };
  const googleLogin = useGoogleLogin({
    onSuccess: async ({ code }) => {
      const tokens = await axios.post("http://localhost:3001/auth/google", {
        // http://localhost:3001/auth/google backend that will exchange the code
        code,
      });

      console.log(tokens);
      let user = jwt_decode(tokens.data.id_token);
      console.log("user jwt", user);
      localStorage.setItem("loginData", JSON.stringify(user)); // passing to JSON object.
      setLoginData(user);
      let storage = localStorage.getItem("loginData");
      console.log(JSON.parse(storage), "leo"); // noted that to view the retrieving localStorage must parse again to js object.
      window.location.replace("http://localhost:3000/Home");
    },
    flow: "auth-code",
  });

  // User now can login and be automatically redirected to /Home.
  // missing: middleware function to validate token access on each request
  // missing: create User model and inject conection to DB
  // missing: relational models between user and wallet (wallet already has the relation with operations)
  // missing: visualize the user info once logged on navBar.
  return (
    <div className={style.div_container}>
      <div>
        <h1>Hello world</h1>
        <Link to="/Home">Get started</Link>
        <div id="signInDiv">
          {loginData ? (
            <div>
              <h1>{loginData.email}</h1>
              <button onClick={() => logout()}>log out 🚀 </button>
            </div>
          ) : (
            <button onClick={() => googleLogin()}>
              Sign in with Google 🚀{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
