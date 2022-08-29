import React from "react";
import style from "./beforeHome.module.css"
import { Link } from "react-router-dom";

export default function BeforeHome() {
    
    return (
        <div className={style.div_container}>
            <div>
                <h1>Hello world</h1>
                <Link to="/Home">Get started</Link >
            </div>
           
        </div>
    )
}