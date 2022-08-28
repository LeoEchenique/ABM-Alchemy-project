import React from "react";
import style from "./Latest_operations.module.css";
import icon from "../icons/icon_operations.png";
import icon_edit from "../icons/icon_edit.png";
import icon_delete from "../icons/icon_delete.png";
import { useEffect, useState } from "react";
import axios from "axios";


export default function LatestOperation({currentBalance}) {
    const [operations, setOperations] = useState([]);

    const getOperations = async ()=>{
        let operation = await axios.get("http://localhost:3001/Operations/Latest");
        setOperations(operation.data)
        
    }   
    useEffect( () => {
        getOperations()
    }, [])
    
    async function handleDelete(id) {
        try {    
            await axios.delete(`http://localhost:3001/Operations/Delete/${id}`)
            getOperations();
            currentBalance();
        } catch (error) {
            console.log(error.message, "ERROR HANDLEDELETE")
        }
    
       
       
    }

    return (
        <div className={style.div_container}>
            <h1>Last operations</h1>
            {operations?.length ?
                operations.map(operation => {
                    return (
                    <div className={style.operation} key={operation.Id}>    
                        <img src={icon} alt="" />
                        <h3 className={style.reason}>{operation.Reason}</h3>
                        <h3>{operation.Type}</h3>
                        <h3>{operation.Date}</h3>
                        {operation.Type === "Income" ?  <h3> + $ {operation.Mount}</h3> : <h3> - $ {operation.Mount}</h3>}
                    <div className={style.icons}>
                        <img src={icon_edit} alt="" />
                        <img src={icon_delete} alt="" onClick={()=>handleDelete(operation.Id)}/>
                    </div>
                    </div>
                    )
                })
            : null}
           
        </div>
    )
}