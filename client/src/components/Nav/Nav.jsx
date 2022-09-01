import React from "react";
import style from "../Nav/nav.module.css"
import { Link } from "react-router-dom";
import icon_dashboard from "../icons/icon_dashboard.png"
import icon_operation from "../icons/icon_operationNav.png"
export default function Nav() {
    
    return (
        <div className={style.nav_container}>
            <ul className={style.ul_nav}>
                <li>Login</li>
                <span>or</span>
                <li>Register</li>
            </ul>
            <div className={style.nav_links}>
                <Link className={style.a} to="/Home"><img src={icon_dashboard} alt=""/> Dashboard </Link>
                <Link className={style.a} to="/Home/Operations/All"> <img src={icon_operation} alt="" /> All operations </Link>
            </div>
        </div>
    )
}   