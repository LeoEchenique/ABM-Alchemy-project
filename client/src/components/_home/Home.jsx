import React from "react";
import style from "../_home/home.module.css"
import Nav from "../Nav/Nav"
import Wallet from "../wallet/Wallet";
import LastOperation from "../Last_operation/Last_operation";
import LatestOperations from "../Latest_operation/Latest_operations";


export default function Home() {

    return (
        <div className={style.div_container}>
            <Nav />
            <div className={style.home_content_container}>
                <div className={style.wallet}>
                    <Wallet  />
                </div>
                <div className={style.last_operation}>
                    <LastOperation />
               </div>
                <div className={style.last_ten_operations}>
                    <LatestOperations />
                </div>
            </div>
      
        </div>
    )
}