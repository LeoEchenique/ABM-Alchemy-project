import React from "react";
import style from "../Nav/nav.module.css";
import { Link } from "react-router-dom";
import icon_dashboard from "../icons/icon_dashboard.png";
import icon_operation from "../icons/icon_operationNav.png";
import icon_user from "../icons/icon_user.png";
import { useState, useEffect } from "react";


export default function Nav() {
  const [logged, setLogged] = useState({});

  useEffect(() => {
    let userLog = JSON.parse(localStorage.getItem("user"));

    setLogged(userLog);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setLogged(null);
    window.location.replace("http://localhost:3000/");
  };

  return (
    <div className={style.nav_container}>
      {logged ? (
        <div className={style.user_nav}>
          <h1>Hi {logged.Name}!</h1>
          <div>
            <img src={logged.Picture ? logged.Picture : icon_user} alt="" />
          </div>
        </div>
      ) : null}

      <div className={style.nav_links}>
        <Link className={style.a} to="/Home">
          <img src={icon_dashboard} alt="" /> Dashboard{" "}
        </Link>
        <Link className={style.a} to="/Home/Operations/All">
          <img src={icon_operation} alt="" /> All operations{" "}
        </Link>
      </div>
      <div className={style.logOut}>
              <button className={style.buttonLog} onClick={() => logout()}>Log out 🚀 </button>
      </div>
    </div>
  );
}
