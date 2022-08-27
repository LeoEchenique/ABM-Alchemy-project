import React from "react";
import style from "../Nav/nav.module.css"
import { Link } from "react-router-dom";
import icon_dashboard from "../../components/icon_dashboard.png"
import icon_operation from "../../components/icon_operation.png"
export default function Nav() {
    
    return (
        <div className={style.nav_container}>
            <ul className={style.ul_nav}>
                <li>Login</li>
                <span>or</span>
                <li>Register</li>
            </ul>
            <div className={style.nav_links}>
                <Link to="/Home"><img src={icon_dashboard} alt=""/> Dashboard </Link>
                <Link to="/Home/Operations/NewOperation"> <img src={icon_operation} alt="" /> Submit an operation </Link>
            </div>
        </div>
    )
}   