import React from "react";
import style from "./Latest_operations.module.css"
import icon from "../icons/icon_operations.png";
import icon_edit from "../icons/icon_edit.png"
import icon_delete from "../icons/icon_delete.png"
export default function LatestOperation() {
    

    return (
        <div className={style.div_container}>
            <h1>Last 10 operations</h1>
            <div className={style.operation}>
                <img src={icon} alt="" />
                <h3>Reason operation</h3>
                <h3>type of operation</h3>
                <h3>Date</h3>
                <h3>Amount</h3>
                <div className={style.icons}>
                    <img src={icon_edit} alt="" />
                    <img src={icon_delete} alt="" />
            </div>
            </div>
            
        </div>
    )
}