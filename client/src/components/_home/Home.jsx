import React from "react";
import style from "../_home/home.module.css"
import Nav from "../Nav/Nav"

export default function Home() {
    
    return (
        <div className={style.div_container}>
            <Nav />
            <div className={style.home_content_container}>
                <div className={style.wallet}>
                  <h1>Your wallet</h1>
                </div>
                <div className={style.last_operation}>
                    <h1>Last operation</h1>
               </div>
                <div className={style.last_ten_operations}>
                    <h1>Last ten operations</h1>
                </div>
            </div>
        </div>
    )
}